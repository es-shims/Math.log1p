'use strict';

var log1p = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(log1p, t);

	t.end();
});
