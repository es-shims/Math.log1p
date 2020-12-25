# Math.log1p <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

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

[package-url]: https://npmjs.org/package/math.log1p
[npm-version-svg]: https://versionbadg.es/es-shims/Math.log1p.svg
[deps-svg]: https://david-dm.org/es-shims/Math.log1p.svg
[deps-url]: https://david-dm.org/es-shims/Math.log1p
[dev-deps-svg]: https://david-dm.org/es-shims/Math.log1p/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.log1p#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.log1p.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.log1p.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.log1p.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.log1p
