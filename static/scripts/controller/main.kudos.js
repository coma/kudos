app.controller('main.kudos', function ($scope, kudoApiService) {

    var fetch = function () {

        kudoApiService
            .list()
            .then(function (kudos) {

                $scope.kudos = kudos;
            });
    };

    $scope.$on('kudo.refresh', function () {

        fetch();
    });

    fetch();
});