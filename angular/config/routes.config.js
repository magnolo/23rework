export function RoutesConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	let getView = (viewName) => {
		return `./views/app/pages/${viewName}/${viewName}.page.html`;
	};

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('app', {
			abstract: true,
            data: {},//{auth: true} would require JWT auth
			views: {
				header: {
					templateUrl: getView('header')
				},
				main: {},
                'map@': {
                    templateUrl: getView('test-view')
                }
			}
		})
		.state('app.landing', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getView('test-view')
                }
            }
        })
        .state('app.export', {
            abstract: true,
            url: '/export',
            resolve: {
                countries: function(DataService) {
                    return DataService.getOne('countries/isos').then(function(countries) {
                        return countries;
                    });
                }
            }
        })
        .state('app.export.detail', {
            url: '/:id/:name',
            data: {
                pageName: 'Export Data'
            },
            views: {
                'fullscreen@': {
                    templateUrl: getView('cover')
                }
            }
        })
        .state('app.export.detail.chapter', {
            url: '/chapter/:chapter',
            data: {
                pageName: 'Export Data'
            },
            views: {
                'header@': {
                    templateUrl: getView('chapter')
                },
                'sidebar@': {
                    templateUrl: getView('chapterContent')
                },
                'main@': {
                    templateUrl: getView('test-view')
                }
            }
        })
        .state('app.export.detail.chapter.indicator', {
            url:'/:indicator/:indiname',
            views: {
                'header@': {
                    templateUrl: getView('chapter')
                },
                'sidebar@': {
                    templateUrl: getView('chapterContent')
                },
                'main@': {
                    templateUrl: getView('test-view')
                }
            }
        })
        .state('app.export.detail.chapter.indicator.country', {
            url:'/:iso'
        })
        .state('app.export.detail.chapter.indicator.country.compare', {
            url:'/:compare/:countries'
        })
        .state('app.login', {
			url: '/login',
			views: {
				'main@': {
					templateUrl: getView('login')
				}
			}
		})
        .state('app.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        });
}
