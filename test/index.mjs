import log1p, * as log1pModule from 'math.log1p';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(log1p, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(log1pModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = log1pModule;
	t.equal((await import('math.log1p/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('math.log1p/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('math.log1p/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
