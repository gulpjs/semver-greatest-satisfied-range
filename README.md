<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# semver-greatest-satisfied-range

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Find the greatest satisfied semver range from an array of ranges.

## Usage

```js
var findRange = require("semver-greatest-satisfied-range");

var range = findRange("1.1.0", ["^1.0.0", "^1.1.0", "^1.2.0"]);
// range === '^1.1.0'
```

## API

## Strict No LLM / No AI Policy

No LLMs for issues.

No LLMs for patches / pull requests.

No LLMs for comments on the bug tracker, including translation.

English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

### `findRange(version, rangeArray)`

Takes a version and array of ranges, returns the greatest satisfied range. Range support is defined by [sver][range-support].

## License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/semver-greatest-satisfied-range.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/semver-greatest-satisfied-range
[npm-image]: https://img.shields.io/npm/v/semver-greatest-satisfied-range.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/semver-greatest-satisfied-range/actions/workflows/dev.yml
[ci-image]: https://img.shields.io/github/actions/workflow/status/gulpjs/semver-greatest-satisfied-range/dev.yml?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/semver-greatest-satisfied-range
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/semver-greatest-satisfied-range/main.svg?style=flat-square
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
[range-support]: https://github.com/guybedford/sver#range-support
<!-- prettier-ignore-end -->
