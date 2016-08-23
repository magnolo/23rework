angular.module('app', [
    'app.run',
	'app.filters',
	'app.services',
	'app.components',
    'app.directives',
	'app.routes',
	'app.config',
	'app.partials',
	'app.controllers'
]);

angular.module('app.run', []);
angular.module('app.routes', []);
angular.module('app.filters', []);
angular.module('app.services', []);
angular.module('app.config', []);
angular.module('app.directives', ['leaflet-directive']);
angular.module('app.components', [
	'ui.router', 'ngMaterial', 'angular-loading-bar',
	'restangular', 'ngStorage', 'satellizer',
	'angular-carousel','nvd3'
]);
angular.module('app.controllers', []);