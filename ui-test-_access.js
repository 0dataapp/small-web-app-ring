const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	APRVitrine: '.APRVitrine',
	
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

	it('shows APRVitrineInfoLink', function () {
		browser.assert.elements(APRVitrineInfoLink, 1);
	});
	
});
