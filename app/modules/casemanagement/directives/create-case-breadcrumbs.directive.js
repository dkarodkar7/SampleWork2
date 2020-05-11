(function() {

    'use strict';

    angular.module('pb.casemanagement').directive('pbCreateCaseBreadcrumbs', function() {
        return {
            restrict: 'A',
            templateUrl: 'modules/pb-elements/templates/elements-breadcrumbs-menu.html'
        };
    });

})();