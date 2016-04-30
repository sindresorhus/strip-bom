import fs from 'fs';
import test from 'ava';
import m from '../';

test('strips BOM from string', t => {
	t.is(m(fs.readFileSync('fixture-utf8', 'utf8')), 'Unicorn\n');
});

test('strips BOM from the beginning of a file', t => {
	const f = fs.readFileSync('fixture-utf8-bom-middle', 'utf8');
	t.is(m(f), f);
});
