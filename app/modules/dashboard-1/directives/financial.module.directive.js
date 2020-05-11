(function() {
    'use strict';
    angular.module('app').directive('pbFinancialModule', ['AdjustModuleHeight', '$timeout', function(AdjustModuleHeight, $timeout) {

        function controller($scope, $element, MockDataFactory) {
            var _this = this;

            _this.model.$promise.then(function(data){
                    _this.model = data[0].mockData;
                },
                function(){
                    _this.promiseResolvedFailed = true;
                }
            );

            _this.financialModule = {
                getBalance: function() {
                    return getTotal( 'balance' );
                },
                getPoints: function() {
                    return getTotal( 'minimum' );
                }
            };

            function getTotal( dataProp ) {
                var total = 0;
                for (var i = 0; i <  _this.model.length; i++) {
                    var val = _this.model[i][dataProp];
                    total += Number(val.replace(/[^0-9\.]+/g,""));
                }
                return total;
            }
        }

        function link(scope, element, attrs, controller) {
            controller.init = function() {
                scope.responsiveClasses = 'col-md-' + (controller.width == 'full' ? '12' : '6');
            };
            controller.init();

            controller.model.$promise.then(function() {
                // Call AdjustModuleHeight service to make module list
                // height dynamic based on available space inside the module
                AdjustModuleHeight(element);
            });
        }

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-financial.html',
            controllerAs: 'financialModuleCtrl',
            controller: controller,
            scope: true,
            bindToController: {
                moduleTitle: '@',
                model: '=',
                width: '@'
            },
            link: link
        };
    }]);
})();