const mod = require('./ui-behaviour.js');

const kDefaultRoute = mod.OLSKControllerRoutes().APRVitrineRoute;

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

	describe('APRVitrineRandomLink', function test_APRVitrineRandomLink () {
		
		it('sets text', function () {
			browser.assert.text(APRVitrineRandomLink, 'Random');
		});
		
		it('sets href', function () {
			browser.assert.attribute(APRVitrineRandomLink, 'href', '#' + mod.APRVitrineRandomAnchor());
		});

	});

	describe('APRVitrineInfoLink', function test_APRVitrineInfoLink () {
		
		it('sets text', function () {
			browser.assert.text(APRVitrineInfoLink, 'Information');
		});
		
		it('sets href', function () {
			browser.assert.attribute(APRVitrineInfoLink, 'href', 'https://github.com/0dataapp/small-web-app-ring');
		});

	});

	context('APRRandomRoute', function () {

		before(function() {
			return browser.OLSKVisit(mod.OLSKControllerRoutes().APRRandomRoute);
		});

		describe('APRRandomDirectoryLink', function test_APRRandomDirectoryLink () {
			
			it('sets text', function () {
				browser.assert.text(APRRandomDirectoryLink, 'Directory');
			});
			
			it('sets href', function () {
				browser.assert.attribute(APRRandomDirectoryLink, 'href', '#');
			});

		});
	
	});
	
});
