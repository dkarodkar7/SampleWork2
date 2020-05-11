(function() {
    'use strict';
    angular.module('app').directive('pbOrderHistoryModule', ['AdjustModuleHeight', function(AdjustModuleHeight) {

        function controller($scope, $element, MockDataFactory) {
            var _this = this;

            _this.model.$promise.then(null,
                function(){
                    _this.promiseResolvedFailed = true;
                }
            );
        }

        function link(scope, element, attrs, controller) {

            controller.numericStepper = {
                type        : 'float', // Allow floating point numbers
                wheel_step  : 1,       // Wheel increment is 1
                arrow_step  : 0.5,     // Up/Down arrows increment is 0.5
                limit       : [1,],    // No negative values
                onStep      : function( val, up )
                {
                    // do something here...
                }
            };

            controller.init = function() {
                scope.responsiveClasses = 'col-md-' + (controller.width == 'full' ? '12' : '6');
            };
            controller.init();

            controller.model.$promise.then(function(){
                // Call AdjustModuleHeight service to make module list
                // height dynamic based on available space inside the module
                AdjustModuleHeight(element);
            });
        }

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-order-history.html',
            controllerAs: 'orderHistoryModuleCtrl',
            controller: controller,
            scope: true,
            bindToController: {
                moduleTitle: '@',
                model: '=',
                adjustHeight: '&',
                width: '@'
            },
            link: link
        };
    }]);

})();