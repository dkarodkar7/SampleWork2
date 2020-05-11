(function() {
    'use strict';
    angular.module('pb.products').directive('pbProductsList', function() {

        var link = function(scope, element, attrs, controller) {

        };

        return {
            restrict: 'E',
            templateUrl: 'modules/products/templates/products.list.jsp',
            controllerAs: 'productsListCtrl',
            controller: 'ProductsListCtrl',
            link: link,
            scope: true,
            bindToController: {
                productsModel: '='
            }
        };
    });
})();