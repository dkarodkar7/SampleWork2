(function() {

    'use strict';

    angular.module('app').directive('pbFinancialBreadcrumbs', function() {
        return {
            restrict: 'A',
            templateUrl: 'modules/pb-elements/templates/elements-breadcrumbs.html'
        };
    });

})();