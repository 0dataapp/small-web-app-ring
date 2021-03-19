const kDefaultRoute = require('./ui-behaviour.js').OLSKControllerRoutes().APRVitrineRoute;

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

	describe('APRVitrineInfoLink', function test_APRVitrineInfoLink () {
		
		it('sets text', function () {
			browser.assert.text(APRVitrineInfoLink, 'Information');
		});
		
		it('sets href', function () {
			browser.assert.attribute(APRVitrineInfoLink, 'href', 'https://github.com/0dataapp/small-web-app-ring');
		});

	});
	
});
