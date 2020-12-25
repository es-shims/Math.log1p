import callBind from 'call-bind';

import getPolyfill from 'math.log1p/polyfill';

export default callBind(getPolyfill(), Math);

export { default as getPolyfill } from 'math.log1p/polyfill';
export { default as implementation } from 'math.log1p/implementation';
export { default as shim } from 'math.log1p/shim';
