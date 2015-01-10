app.factory('kudoApiService', function(apiService, $rootScope) {

    return {
        list: function () {

            return apiService
                .get('kudo')
                .then(function (kudos) {

                    return kudos.map(function (kudo) {

                        kudo.moment = moment(kudo.timestamp);
                        
                        return kudo;
                    });
                });
        },
        post: function (kudo) {

            return apiService
                    .post('kudo', kudo)
                    .then(function () {

                        $rootScope.$broadcast('kudo.refresh');
                    });
        }
    }
});
