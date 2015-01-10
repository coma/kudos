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

                var comment = prompt('Leave a message dude!');

                if (!comment) {

                    alert('Sorry... no comment no kudo!');

                    return;
                }

                kudoApiService
                    .post({
                        memberTo: user.nick,
                        comment : comment
                    });
            };
        }
    };
});