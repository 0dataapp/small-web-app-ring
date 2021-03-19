const kDefaultRoute = require('./ui-behaviour.js').OLSKControllerRoutes().APRVitrineRoute;

Object.entries({
	APRVitrine: '.APRVitrine',

	APRVitrineList: '.APRVitrineList',

	APRVitrineBlurb: '.APRVitrineBlurb',

	APRVitrineRandomLink: '.APRVitrineRandomLink',
	APRVitrineInfoLink: '.APRVitrineInfoLink',

	APRRandom: '.APRRandom',

	APRRandomRedirecting: '.APRRandomRedirecting',
	APRRandomTargetDomain: '.APRRandomTargetDomain',
	APRRandomTargetName: '.APRRandomTargetName',
	APRRandomTargetBlurb: '.APRRandomTargetBlurb',
	APRRandomRefresh: 'meta[http-equiv="refresh"]',

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

		it('shows APRRandomRedirecting', function () {
			browser.assert.elements(APRRandomRedirecting, 1);
		});

		it('shows APRRandomTargetDomain', function () {
			browser.assert.elements(APRRandomTargetDomain, 1);
		});

		it('shows APRRandomTargetName', function () {
			browser.assert.elements(APRRandomTargetName, 1);
		});

		it('shows APRRandomTargetBlurb', function () {
			browser.assert.elements(APRRandomTargetBlurb, 1);
		});

		it('shows APRRandomRefresh', function () {
			browser.assert.elements(APRRandomRefresh, 1);
		});
	
	});
	
});
