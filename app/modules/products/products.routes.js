(function () {
    'use strict';

    angular.module('pb.products').config(function ($stateProvider) {
        $stateProvider.state('products', {
            url: '/products',
            templateUrl: 'modules/products/templates/products.jsp',
            controller: 'ProductsCtrl as productsCtrl',

                data: {
                pageTitle: 'label.your.products',
                access: 'public',
                bodyClass: 'your-products',
                breadCrumbData: [
                    {
                        link        : 'dashboard',
                        label       : 'label.order.history.your.account'
                    },
                    {
                        link        : 'products.page',
                        label       : 'label.products.your.products'
                    }
                ]
            }
        })

            .state('mygraphic', {
                url: '/my-graphic',
                templateUrl: 'modules/products/templates/my-graphic.html',
                controller: 'MyGraphicCtrl as mygraphicCtrl',
                data: {
                    pageTitle: 'ThankYou',
                    access: 'public',
                    bodyClass: 'my-account'
                }
            })

            .state('products.page', {
                url: ''
            })

    });

})();