const { throws, rejects, deepEqual } = require('assert');

const mod = require('./ui-behaviour.js');

describe('APRVitrineRandomAnchor', function test_APRVitrineRandomAnchor() {

	it('returns string', function () {
		deepEqual(mod.APRVitrineRandomAnchor(), 'random');
	});

});

describe('APRVitrineRefreshSeconds', function test_APRVitrineRefreshSeconds() {

	it('returns string', function () {
		deepEqual(mod.APRVitrineRefreshSeconds(), 3);
	});

});
