const mod = {

	OLSKControllerRoutes () {
		return {
			APRVitrineRoute: {
				OLSKRoutePath: '/',
				OLSKRouteMethod: 'get',
				OLSKRouteFunction (req, res, next) {
					return res.render(require('path').join(__dirname, 'index.html'));
				},
			},
			APRRandomRoute: {
				OLSKRoutePath: '/#' + mod.APRVitrineRandomAnchor(),
				OLSKRouteMethod: 'get',
				OLSKRouteFunction (req, res, next) {
					return res.render(require('path').join(__dirname, 'index.html'));
				},
			},
		};
	},

	APRVitrineRandomAnchor () {
		return 'random';
	},

	// MESSAGE

	WindowHashDidChange () {
		mod.SetupVisibility();
	},

	// SETUP

	_SetupMethods () {
		return Object.keys(mod).filter(function (e) {
			return e.match(/^Setup/);
		});
	},

	SetupElements () {
		mod._APRVitrine = document.querySelector('.APRVitrine');
		mod._APRRandom = document.querySelector('.APRRandom');
	},

	SetupVisibility () {
		const isRandom = window.location.hash.replace(/^#+/, '').trim() === mod.APRVitrineRandomAnchor();

		document.body.removeChild(isRandom ? mod._APRVitrine : mod._APRRandom);
		document.body.appendChild(isRandom ? mod._APRRandom : mod._APRVitrine);
	},

	SetupWindowHashChange() {
		window.addEventListener('hashchange', mod.WindowHashDidChange, false);
	},

	// LIFECYCLE

	LifecyclePageDidLoad () {
		return mod._SetupMethods().forEach(function (e) {
			return mod[e]();
		});
	},

};

if (typeof module !== 'undefined') {
	module.exports = mod;
}

const APRVitrineBehaviour = mod;
