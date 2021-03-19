const kDefaultRoute = require('./ui-behaviour.js').OLSKControllerRoutes().APRVitrineRoute;

Object.entries({
	APRVitrine: '.APRVitrine',

	APRVitrineRandomLink: '.APRVitrineRandomLink',
	APRVitrineInfoLink: '.APRVitrineInfoLink',
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

	it('shows APRVitrineRandomLink', function () {
		browser.assert.elements(APRVitrineRandomLink, 1);
	});

	it('shows APRVitrineInfoLink', function () {
		browser.assert.elements(APRVitrineInfoLink, 1);
	});
	
});
