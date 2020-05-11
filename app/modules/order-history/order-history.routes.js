(function () {
    'use strict';

    angular.module('pb.orderhistory').config(function ($stateProvider) {
        $stateProvider.state('orderhistory', {
            url: '/order-history',
            templateUrl: 'modules/order-history/templates/order-history.html',
            controller: 'OrderHistoryCtrl as orderHistoryCtrl',
            data: {
                pageTitle: 'Order History',
                access: 'public',
                bodyClass: 'order-history',
                breadCrumbData: [
                    {
                        link        : 'dashboard',
                        label       : 'Your Dashboard'
                    },
                    {
                        link        : 'orderhistory.page',
                        label       : 'Order History'
                    }
                ]
            }
        })
        .state('orderhistory.page', {
            url: ''
        });
    });

})();