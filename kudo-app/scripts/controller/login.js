app.controller('login', function ($scope, $state, apiService) {

    $scope.login = function (data) {

        apiService
            .get('users/me', data)
            .then(function () {

                $state.go('main');
            });
    };
});