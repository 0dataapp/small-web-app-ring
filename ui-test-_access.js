const kDefaultRoute = require('./ui-behaviour.js').OLSKControllerRoutes().APRVitrineRoute;

Object.entries({
	APRVitrine: '.APRVitrine',

	APRVitrineList: '.APRVitrineList',

	APRVitrineBlurb: '.APRVitrineBlurb',

	APRVitrineJoin: '.APRVitrineJoin',

	APRVitrineRandomLink: '.APRVitrineRandomLink',
	APRVitrineInfoLink: '.APRVitrineInfoLink',

	APRRandom: '.APRRandom',

	APRRandomTitle: '.APRRandomTitle',
	APRRandomBlurb: '.APRRandomBlurb',
	APRRandomRedirecting: '.APRRandomRedirecting',
	APRRandomTargetDomain: '.APRRandomTargetDomain',
	APRRandomTargetName: '.APRRandomTargetName',
	APRRandomTargetBlurb: '.APRRandomTargetBlurb',
	APRRandomRefresh: 'meta[http-equiv="refresh"]',

	APRRandomDirectoryLink: '.APRRandomDirectoryLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('APRVitrine_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows APRVitrine', function() {
		return browser.assert.elements(APRVitrine, 1);
	});

	it('shows APRVitrineList', function () {
		return browser.assert.elements(APRVitrineList, 1);
	});

	it('shows APRVitrineBlurb', function () {
		return browser.assert.elements(APRVitrineBlurb, 1);
	});

	it('shows APRVitrineJoin', function () {
		return browser.assert.elements(APRVitrineJoin, 1);
	});

	it('shows APRVitrineRandomLink', function () {
		return browser.assert.elements(APRVitrineRandomLink, 1);
	});

	it('shows APRVitrineInfoLink', function () {
		return browser.assert.elements(APRVitrineInfoLink, 1);
	});

	it('hides APRRandom', function () {
		return browser.assert.elements(APRRandom, 0);
	});

	context('APRRandomRoute', function () {

		before(function() {
			return browser.OLSKVisit(require('./ui-behaviour.js').OLSKControllerRoutes().APRRandomRoute);
		});

		it('hides APRVitrine', function() {
			return browser.assert.elements(APRVitrine, 0);
		});

		it('shows APRRandom', function () {
			return browser.assert.elements(APRRandom, 1);
		});

		it('shows APRRandomTitle', function () {
			return browser.assert.elements(APRRandomTitle, 1);
		});

		it('shows APRRandomBlurb', function () {
			return browser.assert.elements(APRRandomBlurb, 1);
		});

		it('shows APRRandomRedirecting', function () {
			return browser.assert.elements(APRRandomRedirecting, 1);
		});

		it('shows APRRandomTargetDomain', function () {
			return browser.assert.elements(APRRandomTargetDomain, 1);
		});

		it('shows APRRandomTargetName', function () {
			return browser.assert.elements(APRRandomTargetName, 1);
		});

		it('shows APRRandomTargetBlurb', function () {
			return browser.assert.elements(APRRandomTargetBlurb, 1);
		});

		it('shows APRRandomRefresh', function () {
			return browser.assert.elements(APRRandomRefresh, 1);
		});

		it('shows APRRandomDirectoryLink', function () {
			return browser.assert.elements(APRRandomDirectoryLink, 1);
		});
	
	});
	
});
