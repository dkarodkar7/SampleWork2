(function() {

    'use strict';

    angular.module('app').directive('pbFinancialTabs', function() {
        return {
            restrict: 'A',
            templateUrl: 'modules/pb-elements/templates/elements-tabs.html',
            controller: 'FinancialController as tabs'
        };
    });

})();