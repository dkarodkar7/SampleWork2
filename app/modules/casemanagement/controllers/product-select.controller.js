(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('ProductSelectCtrl',
        ['$log', '$scope', '$controller','MockDataFactory', '$state', '$stateParams',
            function($log, $scope, $controller,MockDataFactory, $state, $stateParams) {
                var _this = this;
                var slides;
                _this.selectedLocationCityFilter  = [];
                _this.selectedLocationStateFilter = [];
                _this.selectedProductTypeFilter   = [];
                _this.selectedAccountFilter   = [];
                _this.productsModel          = MockDataFactory.get({ filename: 'case_management_products' });

                this.productsModel.$promise.then(function(data){
                    _this.slides = data.slides;

                $scope.setSelectedLocation = function (_choice) {
                    var locationCity  = _choice.location.address.city;
                    var locationState = _choice.location.address.state;

                    // City
                    if ( $scope.selectedLocationCityFilter.indexOf(locationCity) != -1 ) {
                        $scope.selectedLocationCityFilter.splice($scope.selectedLocationCityFilter.indexOf(locationCity), 1);
                    }
                    else {
                        $scope.selectedLocationCityFilter.push(locationCity);
                    }

                    // State
                    if ( $scope.selectedLocationStateFilter.indexOf(locationState) != -1 ) {
                        $scope.selectedLocationStateFilter.splice($scope.selectedLocationStateFilter.indexOf(locationState), 1);
                    }
                    else {
                        $scope.selectedLocationStateFilter.push(locationState);
                    }


                    if($scope.selectedLocationCityFilter.length) {
                        $scope.totalNumberOfProducts = $scope.selectedLocationCityFilter.length;
                        $scope.numOfProductVisible = $scope.totalNumberOfProducts;
                    }
                    else {
                        $scope.totalNumberOfProducts = $scope.model[0].products.length;
                        $scope.numOfProductVisible = $scope.limitVal;
                    }

                    //scope.limitVal = scope.filterCounter;
                    return false;
                };


                $scope.setSelectedProductType = function(_choice) {
                    // Check array of filters that we're setting
                    // If value exist remove it, else add it to array
                    //
                    if ( $scope.selectedProductTypeFilter.indexOf( _choice.type ) != -1 ) {
                        $scope.selectedProductTypeFilter.splice($scope.selectedProductTypeFilter.indexOf( _choice.type ), 1);
                    }
                    else {
                        $scope.selectedProductTypeFilter.push( _choice.type );
                    }
                };

                    $scope.setSelectedAccountType =  function(_choice) {
                        // Check array of filters that we're setting
                        // If value exist remove it, else add it to array
                        //
                        if ( $scope.selectedAccountFilter.indexOf( _choice.account ) != -1 ) {
                            $scope.selectedAccountFilter.splice($scope.selectedAccountFilter.indexOf( _choice.account ), 1);
                        }
                        else {
                            $scope.selectedAccountFilter.push( _choice.account );
                        }
                    };

                $scope.filterProductType = function( model ) {
                    if ( $scope.selectedProductTypeFilter.length > 0 ) {
                        if (!model.type || $.inArray(model.type, $scope.selectedProductTypeFilter) < 0) {
                            return;
                        }
                    }
                    return model;
                };


                $scope.filterAddress = function( model ) {
                    if ( $scope.selectedLocationCityFilter.length > 0 ) {
                        if (!model.location ||
                            $.inArray(model.location.address.city, $scope.selectedLocationCityFilter) < 0) {
                            return;
                        }
                    }
                    return model;
                };

                     $scope.toggleDropdown = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.status.isopen = !$scope.status.isopen;
                };
             });
            }]);

})();
