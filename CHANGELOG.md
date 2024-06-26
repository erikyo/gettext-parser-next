# Change Log

## [1.0.0] - 2024-04-28
- Initial release of the ts version 

**Note:** since version 4.0.0, the changelog moved to the GitHub [releases](https://github.com/smhg/gettext-parser/releases) page.

## [4.0.0-alpha.1] - 2019-03-17
- Fix header title casing same when parsing (compiling fixed in 4.0.0-alpha.0)

## [4.0.0-alpha.0] - 2019-03-15
- Fix header tiltle casing when compiling (now enforced for fixed list and left unchanged for all others).

## [3.1.1] - 2019-03-14
- Update code to ES6

## [3.1.0] - 2018-11-19
- Add error when PO contains unescaped double quotes (thx @probertson)

## [3.0.0] - 2018-11-10
- Remove support for old node versions

## [2.1.0] - 2018-11-10
- Add wider node support by using `readable-stream` module (thx @coolstuffit and @RignonNoel)

## [2.0.0] - 2018-07-04
- Rename `sortByMsgId` parameter to `sort` (BREAKING)
- Change `sort` parameter to accept custom compare function (thx @probertson)

## [1.3.1] - 2018-02-20
- Fix catastrophic backtracking vulnerability in patch version to reach more users.

## [1.4.0] - 2018-02-19
- Fix catastrophic backtracking vulnerability in line folding regex (thx @davisjam).
- Add sort option for PO compilation (thx @AlexMost).

## [1.3.0] - 2017-08-03
- Add line folding length option to `po.compile` (thx @SleepWalker).
- Update code to use new buffer API.

## [1.2.2] - 2017-01-11
- Use semistandard coding style.
- Remove unreachable code (thx @jelly).
- Replace grunt with npm scripts.
- Replace jshint with eslint.

## [1.2.1] - 2016-11-26
- Fix typo in readme (thx @TimKam).
- New project maintainer.

## [1.2.0] - 2016-06-13
- Fix compilation of plurals when msgstr only contains one element (thx @maufl).
- Fix example in readme (thx @arthuralee).

## [1.1.2] - 2015-10-07
- Update dependencies.

## [1.1.1] - 2015-06-04
- Fix hash table location value in compiled mo files

## [1.1.0] - 2015-01-21
- Add `po.createParseStream` method for parsing PO files from a Stream source
- Update documentation

## [1.0.0] - 2015-01-21
- Bump version to 1.0.0 to be compatible with semver
- Change tests from nodeunit to mocha
- Unify code style in files and added jshint task to check it
- Add Grunt support to check style and run tests on `npm test`

## [0.2.0] - 2013-12-30
- Remove node-iconv dependency
- Fix a global variable leak (`line` was not defined in `pocompiler._addPOString`)
- Apply some code maintenance (applied jshint rules, added "use strict" statements)
- Update e-mail address in .travis.yml
- Add CHANGELOG file

[4.0.0-alpha.1]: https://github.com/smhg/gettext-parser/compare/v4.0.0-alpha.0...v4.0.0-alpha.1
[4.0.0-alpha.0]: https://github.com/smhg/gettext-parser/compare/v3.1.1...v4.0.0-alpha.0
[3.1.1]: https://github.com/smhg/gettext-parser/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/smhg/gettext-parser/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/smhg/gettext-parser/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/smhg/gettext-parser/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/smhg/gettext-parser/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/smhg/gettext-parser/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/smhg/gettext-parser/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/smhg/gettext-parser/compare/v1.2.2...v1.3.0
[1.2.2]: https://github.com/smhg/gettext-parser/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/smhg/gettext-parser/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/smhg/gettext-parser/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/smhg/gettext-parser/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/smhg/gettext-parser/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/smhg/gettext-parser/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/smhg/gettext-parser/compare/v0.2.0...v1.0.0
[0.2.0]: https://github.com/smhg/gettext-parser/compare/v0.1.10...v0.2.0
