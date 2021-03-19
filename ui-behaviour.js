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
		};
	},

	APRVitrineRandomAnchor () {
		return 'random';
	},

};

module.exports = mod;
