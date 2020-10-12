'use strict';

var ToNumber = require('es-abstract/2020/ToNumber');
var callBind = require('es-abstract/helpers/callBind');
var numberIsNan = require('es-abstract/helpers/isNaN');

var $log = callBind('Math.log');

module.exports = function log1p(value) {
	var x = ToNumber(value);
	if (x < -1 || numberIsNan(x)) {
		return NaN;
	}
	if (x === 0 || x === Infinity) {
		return x;
	}
	if (x === -1) {
		return -Infinity;
	}

	return (1 + x) - 1 === 0 ? x : x * ($log(1 + x) / ((1 + x) - 1));
};
