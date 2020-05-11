(function() {

    'use strict';

    angular.module('app').directive('pbProductList', function() {

            var link = function(scope, element, attr, controller){

                controller.setSelectedLocation = function (_choice) {
                    var locationCity  = _choice.location.address.city;
                    var locationState = _choice.location.address.state;

                    // City
                    if ( controller.selectedLocationCityFilter.indexOf(locationCity) != -1 ) {
                        controller.selectedLocationCityFilter.splice(controller.selectedLocationCityFilter.indexOf(locationCity), 1);
                    }
                    else {
                        controller.selectedLocationCityFilter.push(locationCity);
                    }

                    // State
                    if ( controller.selectedLocationStateFilter.indexOf(locationState) != -1 ) {
                        controller.selectedLocationStateFilter.splice(controller.selectedLocationStateFilter.indexOf(locationState), 1);
                    }
                    else {
                        controller.selectedLocationStateFilter.push(locationState);
                    }


                    if(controller.selectedLocationCityFilter.length) {
                        controller.totalNumberOfProducts = controller.selectedLocationCityFilter.length;
                        controller.numOfProductVisible = controller.totalNumberOfProducts;
                    }
                    else {
                        controller.totalNumberOfProducts = controller.model[0].products.length;
                        controller.numOfProductVisible = controller.limitVal;
                    }

                    //scope.limitVal = scope.filterCounter;
                    return false;
                };


                controller.setSelectedProductType = function(_choice) {
                    // Check array of filters that we're setting
                    // If value exist remove it, else add it to array
                    //
                    if ( controller.selectedProductTypeFilter.indexOf( _choice.type ) != -1 ) {
                        controller.selectedProductTypeFilter.splice(controller.selectedProductTypeFilter.indexOf( _choice.type ), 1);
                    }
                    else {
                        controller.selectedProductTypeFilter.push( _choice.type );
                    }
                };

                controller.setSelectedAccountType =  function(_choice) {
                    // Check array of filters that we're setting
                    // If value exist remove it, else add it to array
                    //
                    if ( controller.selectedAccountFilter.indexOf( _choice.account ) != -1 ) {
                        controller.selectedAccountFilter.splice(controller.selectedAccountFilter.indexOf( _choice.account ), 1);
                    }
                    else {
                        controller.selectedAccountFilter.push( _choice.account );
                    }
                };

                controller.filterProductType = function( model ) {
                    if ( controller.selectedProductTypeFilter.length > 0 ) {
                        if (!model.type || $.inArray(model.type, controller.selectedProductTypeFilter) < 0) {
                            return;
                        }
                    }
                    return model;
                };


                controller.filterAddress = function( model ) {
                    if ( controller.selectedLocationCityFilter.length > 0 ) {
                        if (!model.location ||
                            $.inArray(model.location.address.city, controller.selectedLocationCityFilter) < 0) {
                            return;
                        }
                    }
                    return model;
                };

                //controller.toggled = function(open) {
                //    //$log.log('Dropdown is now: ', open);
                //};

                controller.toggleDropdown = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    controller.status.isopen = !$scope.status.isopen;
                };

            };

            return {
                restrict: 'E',
                templateUrl: 'modules/casemanagement/templates/productlist.html',
                controller: 'ProductListCtrl as productlistCtrl',
                link: link

            };
        })

       /* .directive('technicalissueselect', function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs, controllers,state) {
                    element.bind('click', function () {
                        $scope.accountselectissue = true;
                        $state.go('casemanagement.selectissue');

                    });
                }
            };
        })*/
})();