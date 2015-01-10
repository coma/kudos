app.controller('logout', function ($scope, securityService) {

    securityService.logout();
});