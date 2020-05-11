(function() {

    'use strict';

    angular.module('pb.products').directive('pbProductsBreadcrumbs', function() {
        return {
            restrict: 'A',
            templateUrl: 'modules/pb-elements/templates/elements-breadcrumbs.jsp'
        };
    });

})();