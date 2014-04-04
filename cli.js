#!/usr/bin/env node
'use strict';
var fs = require('fs');
var pkg = require('./package.json');
var stripBom = require('./index');
var input = process.argv[2];

function stdin(cb) {
	var ret = '';
	process.stdin.on('data', function (data) { ret += data });
	process.stdin.on('end', cb.bind(null, ret));
}

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ strip-bom <file> > <new-file>');
	console.log('  $ cat <file> | strip-bom > <new-file>');
	console.log('');
	console.log('Example');
	console.log('  $ strip-bom unicorn.txt > unicorn-without-bom.txt');
}

function init(data) {
	process.stdout.write(stripBom(data));
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	init(fs.readFileSync(input));
} else {
	stdin(init);
}
