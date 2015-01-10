app.controller('login', function ($scope, securityService) {

    $scope.login = function (credentials) {

        securityService.login(credentials.nick);
    };
});