import fs from 'fs';
import test from 'ava';
import stripBom from '../index.js';

test('strips BOM from string', t => {
	const filePath = new URL('fixture-utf8', import.meta.url);
	const fixture = fs.readFileSync(filePath, 'utf8');
	t.is(stripBom(fixture), 'Unicorn\n');
});

test('strips BOM from the beginning of a file', t => {
	const filePath = new URL('fixture-utf8-bom-middle', import.meta.url);
	const fixture = fs.readFileSync(filePath, 'utf8');
	t.is(stripBom(fixture), fixture);
});
