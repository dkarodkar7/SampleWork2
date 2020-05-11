(function() {

    'use strict';

    angular.module('pb.financial').controller('FinancialPurchasePowerController', ['$log', '$scope', 'MockDataFactory', '$stateParams',
    function($log, $scope, MockDataFactory, $stateParams) {

        var _this = this;

        // no longer getting stateParams for account Link list

        MockDataFactory.query({filename: 'financial_list'}).$promise.then(function(data){

            _this.accountListMock = data[1].MyBillResponse[1].purchasepower;
            _this.accountLink = data[1].MyBillResponse[1].purchasepower[$stateParams.id];

        });

        MockDataFactory.query({filename: 'notificationWarning'}).$promise.then(function(data){
            _this.notificationsInline = data[0].PurchasePower;
        });

        // orange notifications at top of the page - should be limited 2 only 2 notifications
        MockDataFactory.query({filename: 'notifications'}).$promise.then(function(data){

            _this.notifications = data[0].PurchasePower[0].list;

        });
        MockDataFactory.query({filename: 'espot'}).$promise.then(function(data){
            _this.espot = data[0].financial;
        });

        // breadcrumbs stuff
        _this.breadcrumb = [
            {
                link        : 'dashboard',
                label       : 'Prepaid Accounts'
            },
            {
                link        : 'financial.purchasepower',
                label       : 'Purchase Power'
            }
            //,
            //{
            //    link        : 'financial.prepaidaccount',
            //    label       : 'Prepaid Accounts',
            //    currentTab  : '#prepaid-accounts',
            //    bootstrapClass: 'col-sm-3'
            //},
            //{
            //    link        : 'financial.permitPostage',
            //    label       : 'Easy Permit Postage',
            //    currentTab  : '#permit-postage',
            //    externalLink: 'http://pitneybowes.com',
            //    bootstrapClass: 'col-sm-3'
            //},
            //{
            //    link        : 'financial.invoices',
            //    label       : 'Invoices & Statements',
            //    currentTab  : '#invoices',
            //    externalLink: 'http://pitneybowes.com',
            //    bootstrapClass: 'col-sm-3'
            //}
        ];

    }]);

})();
