import test from 'ava';
import isLxde from '.';

test('is-lxde', async t => {
	t.is(await isLxde, false);
});
