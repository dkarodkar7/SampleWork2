(function() {

    angular.module('app').directive('pbCharts', function() {

        function controller($scope) {
            // var _this = this;
        }
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-charts.html',
            controllerAs: 'charts',
            controller: controller,
            bindToController: {
                'moduleTitle': '@',
                'model': '='
            }

        };
    });

})();