const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('APRVitrine_Misc', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('sets lang', function() {
		browser.assert.attribute('html', 'lang', 'en');
	});

	it('sets encoding', function () {
		browser.assert.attribute('meta[http-equiv="Content-Type"]', 'content', 'text/html; charset=utf-8');
	});

	it('sets width', function () {
		browser.assert.attribute('meta[name="viewport"]', 'content', 'width=device-width');
	});

	it('sets title', function() {
		browser.assert.text('title', 'Appring');
	});
	
});
