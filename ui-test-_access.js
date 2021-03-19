const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	APRVitrine: '.APRVitrine',
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
	
});
