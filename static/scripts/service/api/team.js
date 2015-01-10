app.factory('teamApiService', function(apiService) {

    return {
        list: function () {

            return apiService.get('teammember');
        }
    }
});
