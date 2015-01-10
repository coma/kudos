app.factory('securityService', function (config, $rootScope, $state, $parse, apiService, $urlRouter, storageService) {

    var user;
    var session = storageService.session;

    var service = {
        setNick        : function (nick) {

            session.set('nick', nick);
        },
        getNick        : function () {

            return session.get('nick');
        },
        getUser        : function () {

            return user;
        },
        isAuthenticated: function () {

            return !!user;
        },
        logout          : function (noRedirect) {

            user = null;
            session.clear();

            if (!noRedirect) {

                $state.go(config.login);
            }

            service.emit('logout');
        },
        login          : function (nick, sync) {

            service.setNick(nick);

            return apiService
                .get('teammember/' + nick)
                .then(function (data) {

                    user = data;

                    if (sync) {

                        $urlRouter.sync();

                    } else {

                        $state.go(config.index);
                    }

                    return user;
                })
                .catch(function () {

                    service.logout();
                });
        }
    };

    $rootScope.$on('$stateChangeStart', function (event, toState) {

        if (service.isAuthenticated() || toState.name === config.login) {

            return;
        }

        event.preventDefault();

        if (!session.has('nick')) {

            return service.logout();
        }

        service.login(session.get('nick'), true);
    });

    Emitter(service);

    return service;
});