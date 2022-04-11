'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var orig = Math.log1p;

	// IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
	if (!orig || orig(-1e-17) !== -1e-17) {
		return implementation;
	}

	return orig;
};
