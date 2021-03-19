const uRandomElement = function () {
	const array = [].concat(...arguments);
	return array[Date.now() % array.length];
};

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

	APRVitrineRefreshSeconds () {
		return 3;
	},

	// DATA

	DataProjects () {
		return Array.from(mod._APRVitrine.querySelectorAll('li a')).map(function (e) {
			return {
				APRProjectName: e.innerHTML,
				APRProjectURL: e.getAttribute('href'),
				APRProjectBlurb: e.getAttribute('title'),
			};
		});
	},

	// MESSAGE

	WindowHashDidChange () {
		mod.SetupRandom();
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

	SetupRandom () {
		const isRandom = window.location.hash.replace(/^#+/, '').trim() === mod.APRVitrineRandomAnchor();

		document.body.removeChild(isRandom ? mod._APRVitrine : mod._APRRandom);
		document.body.appendChild(isRandom ? mod._APRRandom : mod._APRVitrine);

		if (!isRandom) {
			return;
		}

		const item = uRandomElement(mod.DataProjects());

		document.querySelector('.APRRandomTargetDomain').innerText = (new URL(item.APRProjectURL)).hostname;
		document.querySelector('.APRRandomTargetName').innerText = item.APRProjectName;
		document.querySelector('.APRRandomTargetBlurb').innerText = item.APRProjectBlurb;
		document.querySelector('meta[http-equiv="refresh"]').setAttribute('content', `${ mod.APRVitrineRefreshSeconds() }; url=${ item.APRProjectURL }`);
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
