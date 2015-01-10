var app = angular.module('app', ['ui.router']);

app.constant('config', {
    api  : '/api',
    index: 'private.main',
    login: 'public'
});

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(function($injector) {

        $injector
            .get('$state')
            .go($injector.get('config').index);
    });

    $stateProvider
        .state('public', {
            url        : '/login',
            templateUrl: 'templates/view/login.html',
            controller : 'login'
        })
        .state('private', {
            url        : '/',
            abstract   : true,
            templateUrl: 'templates/view/main.html'
        })
        .state('private.main', {
            url  : '',
            views: {
                'header': {
                    templateUrl: 'templates/view/main.header.html',
                    controller : 'main.header'
                },
                'team': {
                    templateUrl: 'templates/view/main.team.html',
                    controller : 'main.team'
                },
                'kudos': {
                    templateUrl: 'templates/view/main.kudos.html',
                    controller : 'main.kudos'
                }
            }
        })
    ;
});

app.run(function(securityService) {});

angular.element(document).ready(function () {

    var html = angular.element(document).find('html');
    angular.bootstrap(html, ['app']);
});