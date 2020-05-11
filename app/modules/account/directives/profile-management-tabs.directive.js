(function() {

    'use strict';

    angular.module('app').directive('pbProfileManagementTabs', function() {
        return {
            restrict: 'A',
            templateUrl: 'modules/pb-elements/templates/elements-tabs.html',
            controller: 'ProfileManagementCtrl as tabs'
        };
    });

})();