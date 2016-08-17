import test from 'ava';
import isLxde from './';

test('is-lxde', t => {
	return isLxde().then(data => {
		t.false(data);
	});
});
