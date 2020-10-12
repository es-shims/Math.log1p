'use strict';

module.exports = function (log1p, t) {
	t.test('implementation', function (st) {
		st.equal(log1p(NaN), NaN);
		st.equal(log1p(-1.000000001), NaN);
		st.equal(log1p(0), 0);
		st.equal(log1p(-0), -0);

		st.equal(log1p(Infinity), Infinity);
		st.equal(log1p(-1), -Infinity);

		st.equal(log1p(-1e-17), -1e-17);
		st.equal(log1p(-2e-17), -2e-17);

		st.equal(log1p(5), 1.791759469228055);
		st.equal(log1p(50), 3.9318256327243257);

		st.end();
	});
};
