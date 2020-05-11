(function() {
    'use strict';
    angular.module('app').directive('pbLoader', ['$timeout', function($timeout) {

        function controller($scope, $element, MockDataFactory) {
            //
        }

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/dashboard/templates/loader.html',
            controllerAs: 'loaderCtrl',
            controller: controller,
            scope: true,
            bindToController: {
                showLoader: '=',
                loadFailed: '='
            }
        };
    }]);

})();