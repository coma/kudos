app.controller('main.team', function ($scope, teamApiService) {

    var fetch = function () {

        teamApiService
            .list()
            .then(function (members) {

                $scope.members = members;
            });
    };

    $scope.$on('refresh', function () {

        fetch();
    });

    fetch();
});