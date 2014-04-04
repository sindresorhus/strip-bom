'use strict';
module.exports = function (arg) {
	if (typeof arg === 'string') {
		return arg.replace(/\uFEFF/g, '');
	}

	if (Buffer.isBuffer(arg)) {
		return arg[0] === 0xEF && arg[1] === 0xBB && arg[2] === 0xBF ? arg.slice(3) : arg;
	}

	throw new TypeError('Expected a string or buffer');
};
