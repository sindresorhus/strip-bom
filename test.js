'use strict';
var assert = require('assert');
var stripBom = require('./index');

it('should strip BOM from UTF-8 string/buffer', function () {
	assert.strictEqual(stripBom('\ufeffUnicorn'), 'Unicorn');
	assert.strictEqual(stripBom(new Buffer('\ufeffUnicorn')).toString(), 'Unicorn');
});
