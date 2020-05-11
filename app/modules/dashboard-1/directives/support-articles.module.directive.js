(function() {
    'use strict';
    angular.module('app').directive('pbSupportArticlesModule', ['AdjustModuleHeight', function(AdjustModuleHeight) {

        function controller($scope, $element, MockDataFactory) {
            var _this = this;
            // Get model
            _this.model = MockDataFactory.query({filename: 'support'});

            _this.model.$promise.then(null,
                function(){
                    _this.promiseResolvedFailed = true;
                }
            );
        }

        function link(scope, element, attrs, controller) {
            scope.responsiveClasses = null;

            scope.init = function() {
                scope.responsiveClasses = 'col-md-' + (scope.width == 'full' ? '12' : '6');
            };
            scope.init();

            controller.model.$promise.then(function() {
                // Call AdjustModuleHeight service to make module list
                // height dynamic based on available space inside the module
                AdjustModuleHeight(element);
            });
        }

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-support-articles.html',
            controllerAs: 'supportArticlesModuleCtrl',
            controller: controller,
            scope: {
                moduleTitle: '@',
                width: '@'
            },
            link: link
        };
    }]);
})();