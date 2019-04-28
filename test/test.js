import fs from 'fs';
import path from 'path';
import test from 'ava';
import stripBom from '..';

test('strips BOM from string', t => {
	t.is(stripBom(fs.readFileSync(path.join(__dirname, 'fixture-utf8'), 'utf8')), 'Unicorn\n');
});

test('strips BOM from the beginning of a file', t => {
	const fixture = fs.readFileSync(path.join(__dirname, 'fixture-utf8-bom-middle'), 'utf8');
	t.is(stripBom(fixture), fixture);
});
