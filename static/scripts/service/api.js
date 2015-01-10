app.factory('apiService', function(config, $q, $http, storageService) {

    var getURL = function (url) {

        return [config.api, url].join('/');
    };

    var http = function (method, url, params, data) {

        var headers = {
            Nick: storageService.session.get('nick')
        };

        var cancel = $q.defer();
        var call = $http({
            headers: headers,
            method : method,
            url    : getURL(url),
            params : params,
            data   : data,
            timeout: cancel.promise
        }).then(function (response) {

            return response.data;
        });

        call.abort = function () {

            cancel.resolve();
        };

        return call;
    };

    var service = {
        getAbortable: function () {

            return {abort: function () {}};
        },
        get: function (url, params, data) {

            return http('get', url, params, data);
        },
        post: function (url, data, params) {

            return http('post', url, params, data);
        },
        put: function (url, data, params) {

            return http('put', url, params, data);
        },
        delete: function (url) {

            return http('delete', url);
        },
        save: function (url, data, params) {

            data = angular.copy(data);

            if (data.hasOwnProperty('id')) {

                url = url.replace(/\/$/, '') + '/' + data.id;
                delete data.id;

                return service.put(url, data, params);
            }

            return service.post(url, data, params);
        }
    };

    return service;
});
