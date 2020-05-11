(function() {
    'use strict';
    angular.module('app').directive('pbSupportCasesModule', ['AdjustModuleHeight', function(AdjustModuleHeight) {

        function controller($scope, $element, MockDataFactory,$state) {
            var _this = this;
            // Get model
            _this.model = MockDataFactory.query({filename: 'support'});

            _this.model.$promise.then(null,
                function(){
                    _this.promiseResolvedFailed = true;
                }


            );
            $scope.createcase = function(){
                $state.go('casemanagement.createcase');
            }

                   }

        function link(scope, element, attrs, controller) {
            scope.init = function() {
                scope.responsiveClasses = 'col-md-' + (scope.width == 'full' ? '12' : '6');
            };
            scope.init();

            controller.model.$promise.then(function() {
                // Call AdjustModuleHeight service to make module list
                // height dynamic based on available space inside the module
                //
                AdjustModuleHeight(element);
            });




        }

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-support-cases.html',
            controllerAs: 'supportCasesModuleCtrl',
            controller: controller,
            scope: {
                'moduleTitle': '@',
                'width': '@'
            },
            link: link
        };
    }]);

})();