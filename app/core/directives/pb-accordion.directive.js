(function () {

    'use strict';

    angular.module('app').directive('pbAccordion', function () {
        return {
            restrict: 'AE',
            link: function postLink(scope, element) {

                $(element).find('.panel-default').on({
                    'show.bs.collapse': function (event) {
                        $(this).addClass('active');
                    },
                    'hide.bs.collapse': function (event) {
                        $(this).removeClass('active');
                    }
                });

            }
        };
    });

})();
