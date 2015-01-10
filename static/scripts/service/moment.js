app.factory('momentService', function() {

    return {
        parse: function() {

            var fields = Array.prototype.slice.call(arguments),
                object = fields.shift();

            if (!object) {

                return object;
            }

            fields.forEach(function (field) {

                if (object[field]) {

                    object[field] = moment(object[field]);
                }
            });

            return object;
        }
    };
});
