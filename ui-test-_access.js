const kDefaultRoute = require('./ui-behaviour.js').OLSKControllerRoutes().APRVitrineRoute;

Object.entries({
	APRVitrine: '.APRVitrine',

	APRVitrineList: '.APRVitrineList',

	APRVitrineBlurb: '.APRVitrineBlurb',

	APRVitrineRandomLink: '.APRVitrineRandomLink',
	APRVitrineInfoLink: '.APRVitrineInfoLink',

	APRRandom: '.APRRandom',

	APRRandomDirectoryLink: '.APRRandomDirectoryLink',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('APRVitrine_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows APRVitrine', function() {
		browser.assert.elements(APRVitrine, 1);
	});

	it('shows APRVitrineList', function () {
		browser.assert.elements(APRVitrineList, 1);
	});

	it('shows APRVitrineBlurb', function () {
		browser.assert.elements(APRVitrineBlurb, 1);
	});

	it('shows APRVitrineRandomLink', function () {
		browser.assert.elements(APRVitrineRandomLink, 1);
	});

	it('shows APRVitrineInfoLink', function () {
		browser.assert.elements(APRVitrineInfoLink, 1);
	});

	it('hides APRRandom', function () {
		browser.assert.elements(APRRandom, 0);
	});

	context('APRRandomRoute', function () {

		before(function() {
			return browser.OLSKVisit(require('./ui-behaviour.js').OLSKControllerRoutes().APRRandomRoute);
		});

		it('hides APRVitrine', function() {
			browser.assert.elements(APRVitrine, 0);
		});

		it('shows APRRandom', function () {
			browser.assert.elements(APRRandom, 1);
		});

		it('shows APRRandomDirectoryLink', function () {
			browser.assert.elements(APRRandomDirectoryLink, 1);
		});
	
	});
	
});
