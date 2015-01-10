app.controller('login', function ($scope, securityService) {

    securityService.logout(true);

    $scope.login = function (credentials) {

        securityService.login(credentials.nick);
    };
});