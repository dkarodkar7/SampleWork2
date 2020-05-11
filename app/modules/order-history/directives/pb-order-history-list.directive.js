(function() {
    'use strict';
    angular.module('pb.orderhistory').directive('pbOrderHistoryList', function() {

        var afterAngularCompilation = function(scope, element, attrs, controller) {
            controller.reverseDate = true;

            controller.order = function(_string) {
                if( _string == 'date' ) {
                    controller.reverseDate = !controller.reverseDate;
                }
            }

        };

        return {
            restrict: 'E',
            templateUrl: 'modules/order-history/templates/order-history.list.html',
            controllerAs: 'orderHistoryListCtrl',
            controller: 'OrderHistoryListCtrl',
            link: afterAngularCompilation,
            scope: true,
            bindToController: {
                orderHistoryModel: '='
            }
        };
    });
})();