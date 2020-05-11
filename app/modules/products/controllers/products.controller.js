(function () {
    'use strict';

    angular.module('pb.products').controller('ProductsCtrl', [ '$log', '$scope', 'MockDataFactory', 'PBServiceClient',
        function ($log, $scope, MockDataFactory, PBServiceClient) {
            var _this                   = this;

            // Get JSON Mock data & set to list
            // Mapped to list directives through isolated scope
            //
            /*PBServiceClient.getProducts().then(
	            function(data){
	            	_this.productsData = data;
	            },
	            function(response) {
	            	_this.productsData = null;
	            }).finally(function() {
	
	            }); */

            // Get JSON Mock data & set to list
            // Mapped to list directives through isolated scope
            //
            MockDataFactory.query({filename: 'espot'}).$promise.then(function(data){
                _this.espotModel = data[2].orderhistory;
            });


        }]
    );
})();
