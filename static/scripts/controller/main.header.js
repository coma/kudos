app.controller('main.header', function ($scope, securityService) {

    $scope.user = securityService.getUser();
});