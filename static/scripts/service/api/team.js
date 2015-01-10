app.factory('teamApiService', function(apiService, securityService) {

    return {
        list: function () {

            var nick = securityService.getUser().nick;

            return apiService
                .get('teammember')
                .then(function (members) {

                    var me = members.find(function (member) {

                        return member.nick === nick;
                    });

                    members.remove(me);
                    members.unshift(me);

                    return members;
                });
        }
    }
});
