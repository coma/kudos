app.directive('user', function(securityService, kudoApiService) {

    return {
        scope      : {
            user: '=src'
        },
        restrict   : 'E',
        replace    : true,
        templateUrl: 'templates/directive/user.html',
        link       : function(scope, element, attrs) {

            scope.isMe = function (user) {

                return securityService.getUser().nick === user.nick;
            };

            scope.kudo = function (user) {

                kudoApiService
                    .post({
                        memberTo: user.nick,
                        comment : prompt('Leave a message dude!')
                    });
            };
        }
    };
});