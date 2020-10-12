# Math.log1p <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

> ⚠️ This package is not published on npm yet

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.log1p` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-math.log1p).

## Getting started

```sh
npm install --save math.log1p
```

## Usage/Examples

```js
var x = 0.007;

// Compute log(1 + x)
console.log(Math.log1p(x)); // 0.006975613736425242

console.log(Math.log1p(6.3890560989306495)); // 2
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-shims/Math.log1p
[npm-version-svg]: http://versionbadg.es/es-shims/Math.log1p.svg
[travis-svg]: https://travis-ci.org/es-shims/Math.log1p.svg
[travis-url]: https://travis-ci.org/es-shims/Math.log1p
[deps-svg]: https://david-dm.org/es-shims/Math.log1p.svg
[deps-url]: https://david-dm.org/es-shims/Math.log1p
[dev-deps-svg]: https://david-dm.org/es-shims/Math.log1p/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.log1p#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-shims/Math.log1p.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/es-shims/Math.log1p.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/es-shims/Math.log1p.svg
[downloads-url]: http://npm-stat.com/charts.html?package=es-shims/Math.log1p
