import { readFile as fsReadFile } from "node:fs";
import { EOL } from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { describe, expect, it } from "vitest";
import gettextParser from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = promisify(fsReadFile);

describe("PO Compiler", () => {
	describe("Headers", () => {
		it("should keep tile casing", async () => {
			const [json, poData] = await Promise.all([
				readFile(path.join(__dirname, "fixtures/headers-case.json"), "utf8"),
				readFile(path.join(__dirname, "fixtures/headers-case.po"), "utf8"),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), { eol: EOL })
				.toString("utf8");

			expect(compiled).to.equal(poData);
		});
	});

	describe("UTF-8", () => {
		it("should compile", async () => {
			const [json, poData] = await Promise.all([
				readFile(path.join(__dirname, "fixtures/utf8-po.json"), "utf8"),
				readFile(path.join(__dirname, "fixtures/utf8.po"), "utf8"),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), { eol: EOL })
				.toString("utf8");

			expect(compiled).to.equal(poData);
		});
	});

	describe("Latin-13", () => {
		it("should compile", async () => {
			const [json, poData] = await Promise.all([
				// gettext-parser can only handle utf8 input (output will be the specified charset)
				readFile(path.join(__dirname, "fixtures/latin13-po.json"), "utf8"),
				readFile(path.join(__dirname, "fixtures/latin13.po"), "latin1"),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), { eol: EOL })
				.toString("latin1");

			expect(compiled).to.equal(poData);
		});
	});

	describe("Plurals", () => {
		it("should compile correct plurals in POT files", async () => {
			const [json, pot] = await Promise.all([
				readFile(path.join(__dirname, "fixtures/plural-pot.json"), "utf8"),
				readFile(path.join(__dirname, "fixtures/plural.pot"), "utf8"),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), { eol: EOL })
				.toString("utf8");

			expect(compiled).to.equal(pot);
		});
	});

	describe("Message folding", () => {
		it("should compile without folding", async () => {
			const [json, poData] = await Promise.all([
				readFile(path.join(__dirname, "fixtures/utf8-po.json"), "utf8"),
				readFile(path.join(__dirname, "fixtures/utf8-no-folding.po"), "utf8"),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), { foldLength: 0, eol: EOL })
				.toString("utf8");

			expect(compiled).to.equal(poData);
		});

		it("should compile with different folding", async () => {
			const [json, poData] = await Promise.all([
				readFile(path.join(__dirname, "fixtures/utf8-po.json"), "utf8"),
				readFile(path.join(__dirname, "fixtures/utf8-folding-100.po"), "utf8"),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), { foldLength: 100, eol: EOL })
				.toString("utf8");

			expect(compiled).to.equal(poData);
		});
	});

	describe("Sorting", () => {
		it("should sort output entries by msgid when `sort` is `true`", async () => {
			const [json, pot] = await Promise.all([
				readFile(path.join(__dirname, "fixtures/sort-test.json"), "utf8"),
				readFile(path.join(__dirname, "fixtures/sort-test.pot"), "utf8"),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), { sort: true, eol: EOL })
				.toString("utf8");

			expect(compiled).to.equal(pot);
		});

		it("should sort entries using a custom `sort` function", async () => {
			function compareMsgidAndMsgctxt(left, right) {
				if (left.msgid > right.msgid) {
					return 1;
				}

				if (right.msgid > left.msgid) {
					return -1;
				}

				if (left.msgctxt > right.msgctxt) {
					return 1;
				}

				if (right.msgctxt > left.msgctxt) {
					return -1;
				}

				return 0;
			}

			const [json1, json2, pot] = await Promise.all([
				readFile(
					path.join(__dirname, "fixtures/sort-with-msgctxt-test-1.json"),
					"utf8",
				),
				readFile(
					path.join(__dirname, "fixtures/sort-with-msgctxt-test-2.json"),
					"utf8",
				),
				readFile(
					path.join(__dirname, "fixtures/sort-with-msgctxt-test.pot"),
					"utf8",
				),
			]);

			const compiled1 = gettextParser.po
				.compile(JSON.parse(json1), { sort: compareMsgidAndMsgctxt, eol: EOL })
				.toString("utf8");
			const compiled2 = gettextParser.po
				.compile(JSON.parse(json2), { sort: compareMsgidAndMsgctxt, eol: EOL })
				.toString("utf8");

			expect(compiled1).to.equal(compiled2);
			expect(compiled1).to.equal(pot);
			expect(compiled2).to.equal(pot);
		});
	});

	describe("Skip escaping characters", () => {
		it("should compile without escaping characters", async () => {
			const [json, poData] = await Promise.all([
				readFile(
					path.join(__dirname, "fixtures/utf8-skip-escape-characters.json"),
					"utf8",
				),
				readFile(
					path.join(__dirname, "fixtures/utf8-skip-escape-characters.po"),
					"utf8",
				),
			]);

			const compiled = gettextParser.po
				.compile(JSON.parse(json), {
					escapeCharacters: false,
					foldLength: 0,
					eol: EOL,
				})
				.toString("utf8");

			expect(compiled).to.equal(poData);
		});
	});
});
