const mod = require('./ui-behaviour.js');

const kDefaultRoute = mod.OLSKControllerRoutes().APRVitrineRoute;

describe('APRVitrine_Misc', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('sets lang', function() {
		return browser.assert.attribute('html', 'lang', 'en');
	});

	it('sets encoding', function () {
		return browser.assert.attribute('meta[http-equiv="Content-Type"]', 'content', 'text/html; charset=utf-8');
	});

	it('sets width', function () {
		return browser.assert.attribute('meta[name="viewport"]', 'content', 'width=device-width');
	});

	it('sets og:image', function () {
		return browser.assert.attribute('link[rel="apple-touch-icon"]', 'href', 'https://static.rosano.ca/swar/touch.png');
	});

	it('sets og:image', function () {
		return browser.assert.attribute('meta[property="og:image"]', 'content', 'https://static.rosano.ca/swar/touch.png');
	});

	it('sets title', function() {
		return browser.assert.text('title', 'Doorless App Ring');
	});

	describe('APRVitrineRandomLink', function test_APRVitrineRandomLink () {
		
		it('sets text', function () {
			return browser.assert.text(APRVitrineRandomLink, 'Random');
		});
		
		it('sets href', function () {
			return browser.assert.attribute(APRVitrineRandomLink, 'href', '#' + mod.APRVitrineRandomAnchor());
		});

		it('classes APRNoScriptHide', function () {
			return browser.assert.hasClass(APRVitrineRandomLink, 'APRNoScriptHide');
		});

	});

	describe('APRVitrineInfoLink', function test_APRVitrineInfoLink () {
		
		it('sets text', function () {
			return browser.assert.text(APRVitrineInfoLink, 'More info');
		});
		
		it('sets href', function () {
			return browser.assert.attribute(APRVitrineInfoLink, 'href', 'https://github.com/0dataapp/small-web-app-ring');
		});

	});

	context('APRRandomRoute', function () {

		before(function() {
			return browser.OLSKVisit(mod.OLSKControllerRoutes().APRRandomRoute);
		});

		describe('APRRandom', function test_APRRandom () {
			
			it('classes APRNoScriptHide', function () {
				return browser.assert.hasClass(APRRandom, 'APRNoScriptHide');
			});

		});

		describe('APRRandomTitle', function test_APRRandomTitle () {
			
			it('sets text', function () {
				return browser.assert.text(APRRandomTitle, 'Doorless App Ring');
			});

		});

		describe('APRRandomBlurb', function test_APRRandomBlurb () {
			
			it('sets text', function () {
				return browser.assert.text(APRRandomBlurb, 'A webring for web apps');
			});

		});

		describe('APRRandomRedirecting', function test_APRRandomRedirecting () {
			
			it('sets text', function () {
				return browser.assert.text(APRRandomRedirecting, 'Redirecting to');
			});

		});

		describe('APRRandomDirectoryLink', function test_APRRandomDirectoryLink () {
			
			it('sets text', function () {
				return browser.assert.text(APRRandomDirectoryLink, 'Directory');
			});
			
			it('sets href', function () {
				return browser.assert.attribute(APRRandomDirectoryLink, 'href', '#');
			});

		});
	
	});
	
});
