yc.directive('imageFile', function(fileService) {

    return {
        require    : '?ngModel',
        scope      : {
            value      : '=ngModel',
            constraints: '='
        },
        restrict   : 'E',
        replace    : true,
        template   : '<span/>',
        link       : function(scope, element, attrs) {

            var id       = element.attr('id') || '',
                onlyData = attrs.hasOwnProperty('onlyData');

            element.removeAttr('id');

            var read = function(file) {

                fileService
                    .read(file)
                    .then(function (file) {

                        scope.value = onlyData ? file.data : file;
                    });
            };

            var reset = function() {

                element.find('input').remove();
                element.prepend('<input id="' + id + '" type="file" accept="image/*" />');
            };

            element.on('change', function(event) {

                read(event.target.files[0]);
                reset();
            });

            reset();
        }
    };
});