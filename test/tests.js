'use strict';

var is = require('object-is');

module.exports = function (log1p, t) {
	t.test('Math.log1p', function (st) {
		st.ok(is(log1p(NaN), NaN), 'log1p(NaN) is NaN');
		st.ok(is(log1p(-1.000000001), NaN), 'log1p(-1.000000001) is NaN');

		st.ok(is(log1p(0), 0), 'log1p(0) is +0');
		st.ok(is(log1p(-0), -0), 'log1p(-0) is -0');

		st.equal(log1p(Infinity), Infinity, 'log1p(∞) is ∞');
		st.equal(log1p(-1), -Infinity, 'log1p(-1) is -∞');

		st.equal(log1p(-1e-17), -1e-17, 'log1p(-1e-17) is -1e-17');
		st.equal(log1p(-2e-17), -2e-17, 'log1p(-2e-17) is -2e-17');

		st.equal(log1p(5), 1.791759469228055, 'log1p(5) is 1.79…');
		st.equal(log1p(50), 3.9318256327243257, 'log1p(50) is 3.93…');

		st.end();
	});
};
