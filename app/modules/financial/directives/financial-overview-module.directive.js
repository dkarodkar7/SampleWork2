(function() {

    'use strict';

    angular.module('app').directive('pbFinancialOverview', function() {

        var link = function(scope, element, attrs){

            scope.$watch('$parent.singleAccount', function(newValue, oldValue) {
                scope.singleAccount = scope.$parent.singleAccount;
            });
        };

        return {
            restrict: 'AE',
            templateUrl: 'modules/financial/templates/financial-overview-module.html',
            scope: {
                pbFinancialOverviewData: '=',
                pbFinancialOverviewBackLink: '@'
            },
            link: link
        };
    });

})();