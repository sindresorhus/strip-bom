'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	// Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
	// conversion translates it to FEFF (UTF-16 BOM)
	if (input.charCodeAt(0) === 0xFEFF) {
		return input.slice(1);
	}

	return input;
};
