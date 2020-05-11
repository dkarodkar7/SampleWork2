(function() {

    'use strict';

    angular.module('app').directive('pbAccordionMobile', function() {

        return {
            restrict: 'AE',
            link: function postLink(scope, element) {

                // add accordion classes that we don't want on desktop
                //$(element).attr('id', 'accordion');
                $(element).addClass('accordion-group');
                $(element).find('.panel-collapse').addClass('collapse');

                //$(element).find('.tab-pane').removeAttr('ng-switch');

                //$(element).collapse = true;

                //scope.collapse = true;
                //scope.collapse1 = true;

                //$(element).find('.panel-default').on({
                //    'show.bs.collapse': function(event) {
                //        $(this).addClass('active');
                //        $(this).collapse = false;
                //        console.log(scope.collapse + ' is this getting called? false');
                //    },
                //    'hide.bs.collapse': function(event) {
                //        $(this).removeClass('active');
                //        $(this).collapse = true;
                //        console.log(scope.collapse + ' is this getting called? true');
                //    }
                //});
            }
        };
    });

})();
