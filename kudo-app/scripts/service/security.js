app.factory('securityService', function (config, $rootScope, $state, $parse, apiService, storageService, $urlRouter) {

    var user, auth;

    var setAuthToken = function (credentials) {

        auth = 'Basic ' + btoa(credentials.user + ':' + credentials.password);
    };

    var service = {
        getAuth        : function () {

            return auth;
        },
        getUser        : function () {

            return user;
        },
        isAuthenticated: function () {

            return !!user;
        },
        logout          : function (noRedirect) {

            service.setUser(null);
            session.clear();

            if (!noRedirect) {

                $state.go(config.login);
            }

            service.emit('logout');
        },
        login          : function (credentials) {

            setAuthToken(credentials);

            return apiService
                .get('users/me')
                .then(function (data) {

                    service.setUser(data, true);
                    var id = 'user:' + data.id;

                    if (!storageService.local.has(id)) {

                        storageService.local.set(id, {});
                        $state.go('private.welcome');

                    } else {

                        $state.go(config.index);
                    }
                });
        }
    };

    $rootScope.$on('$stateChangeStart', function (event, toState) {

        if (service.isAuthenticated() || !toState.name.startsWith('login')) {

            return;
        }

        event.preventDefault();

        service.sync(true, true);
    });

    Emitter(service);

    return service;
});