'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathLog1p() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ log1p: polyfill },
		{ log1p: function () { return Math.log1p !== polyfill; } }
	);
	return polyfill;
};
