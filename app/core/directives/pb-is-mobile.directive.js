(function() {

    'use strict';

    angular.module('app').directive('pbOnMobile', function($compile) {

        // Perform detection.
        // This code will only run once for the entire application (if directive is present at least once).
        // Can be moved into the compile function if detection result needs to be passed as attribute.

        var notOnMobile = false;


        return {
            compile: function compile(tElement, tAttrs) {

                if(window.innerWidth >= 768 || window.width >= 768) {notOnMobile = true};

                if (!notOnMobile) tElement.attr(tAttrs.pbOnMobile, '');

                tElement.removeAttr('pb-on-mobile');

                return function postLink(scope, element) {
                  //  $compile(element)(scope);

                };
            }
        };
    });

})();
