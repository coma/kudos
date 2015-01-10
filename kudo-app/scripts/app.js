var app      = angular.module('app', ['ui.router']),
    resolver = {};

app.constant('config', {
    api  : 'http://192.168.20.168/api',
    index: 'main',
    login: 'login'
});

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(function($injector) {

        $injector
            .get('$state')
            .go($injector.get('config').index);
    });

    $stateProvider
        .state('login', {
            url        : '/login',
            templateUrl: 'template/view/login.html',
            controller : 'login'
        })
        .state('main', {
            url  : '/',
            views: {
                'header': {
                    templateUrl: 'template/view/main.header.html',
                    controller : 'main.header'
                },
                'team': {
                    templateUrl: 'template/view/main.team.html',
                    controller : 'main.team'
                },
                'kudos': {
                    templateUrl: 'template/view/main.kudos.html',
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