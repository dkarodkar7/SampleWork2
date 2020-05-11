(function () {
    'use strict';

    angular.module('pb.financial').config(function ($stateProvider) {
        $stateProvider.state('financial', {
            url: '/financial',
            templateUrl: 'modules/financial/templates/financial.html',
            controller: 'FinancialController as financial',
            abstract: true
        })

            // PURCHASE POWER
            .state('financial.purchasepower', {
                url: '/purchase-power?collapse',
                data: {
                    pageTitle: 'Financial - Purchase Power',
                    access: 'public',
                    bodyClass: 'financial',
                    breadCrumbData: [
                        {
                            link        : 'dashboard',
                            label       : 'Your Dashboard'
                        },
                        {
                            link        : 'financial.purchasepower',
                            label       : 'Purchase Power Overview'
                        }
                    ]
                },
                views: {
                  "tabContent": {
                    templateUrl : 'modules/financial/templates/purchase-power.html',
                    controller: 'FinancialPurchasePowerController as pPowerCtrl'
                  }
                }
            })
            // PREPAID ACCOUNT
            .state('financial.prepaidaccount', {
                url: '/prepaid-account',
                data: {
                    pageTitle: 'Financial - Postage By Phone',
                    access: 'public',
                    bodyClass: 'financial',
                    breadCrumbData: [
                        {
                            link        : 'dashboard.page',
                            label       : 'Your Dashboard'
                        },
                        {
                            link        : 'financial.prepaidaccount',
                            label       : 'Postage By Phone'
                        }
                    ]
                },
                views: {
                  "tabContent": {
                    templateUrl: 'modules/financial/templates/prepaid.html',
                    controller: 'FinancialPrepaidController as pPaidCtrl'
                  }
                }
            })
            // DETAIL PAGES
            // PURCHASE POWER ACCOUNT
            .state('financial.purchasepowerdetail', {
                url: '/purchase-power/:id?singleAccount',
                data: {
                    pageTitle: 'Financial - Purchase Power Account Details',
                    access: 'public',
                    bodyClass: 'financial',
                    breadCrumbData: [
                        {
                            link        : 'dashboard.page',
                            label       : 'Your Dashboard'
                        },
                        {
                            link        : 'financial.purchasepower',
                            label       : 'Purchase Power Overview'
                        },
                        {
                            link        : 'financial.purchasepowerdetail',
                            label       : 'Account'
                        }
                    ]
                },
                views: {
                  "tabContent": {
                    templateUrl : 'modules/financial/templates/purchase-power-account-details.html',
                    controller: 'FinancialPurchasePowerDetailController as pPowerDetailCtrl'
                  }
                }
            })
            // PREPAID ACCOUNT DETAIL
            .state('financial.prepaidaccountdetail', {
                url: '/prepaid-account/:id',
                data: {
                    pageTitle: 'Financial - Postage By Phone Details',
                    access: 'public',
                    bodyClass: 'financial',
                    breadCrumbData: [
                        {
                            link        : 'dashboard.page',
                            label       : 'Your Dashboard'
                        },
                        {
                            link        : 'financial.prepaidaccount',
                            label       : 'Postage By Phone'
                        },
                        {
                            link        : 'financial.prepaidaccountdetail',
                            label       : 'Account'
                        }
                    ]
                },
                views: {
                    "tabContent": {
                        templateUrl : 'modules/financial/templates/prepaid-account-details.html',
                        controller: 'FinancialPrepaidDetailController as pPaidDetailCtrl'
                    }
                }
            })
        ;
    });
})();
