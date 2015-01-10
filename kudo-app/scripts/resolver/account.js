resolver.account = {
    account: ['apiService', function(apiService) {

        return apiService
            .get('users/me')
            .then(function (user) {

                return {
                    email      : user.email,
                    title      : user.title,
                    firstName  : user.firstName,
                    lastName   : user.lastName,
                    address    : user.address,
                    postCode   : user.postCode,
                    phoneNumber: user.phoneNumber
                };
            });
    }]
};