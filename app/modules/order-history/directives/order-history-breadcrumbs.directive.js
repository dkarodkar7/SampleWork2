(function() {

    'use strict';

    angular.module('pb.orderhistory').directive('pbOrderHistoryBreadcrumbs', function() {
        return {
            restrict: 'A',
            templateUrl: 'modules/pb-elements/templates/elements-breadcrumbs.html'
        };
    });

})();