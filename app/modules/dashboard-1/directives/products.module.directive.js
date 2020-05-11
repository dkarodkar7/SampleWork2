(function() {
    'use strict';
    angular.module('app').directive('pbProductsModule', ['$uibModal', function($uibModal) {

        function controller() {
            var _this = this;

            // Set limit for amount of product to show on the dashboard
            //
            _this.limitVal = 7;
            _this.selectedLocationCityFilter  = [];
            _this.selectedLocationStateFilter = [];
            _this.selectedProductTypeFilter   = [];
            _this.viewMore = true;


            _this.model.$promise.then(null,
                function(){
                    _this.promiseResolvedFailed = true;
                }
            );

            _this.editLocation = function(address, index){
                $uibModal.open({
                    templateUrl: 'modules/dashboard/templates/modals/edit-location.html',
                    controller: 'EditLocationModalController',
                    keyboard: false,
                    size: 'lg',
                    backdrop: 'static',
                    resolve : {
                        address: function () {
                            return address;
                        }
                    }
                }).result.then(function(data) {

                    _this.model[0].products[index].location.address = data;
                });
            }

             _this.addaccount = function(account, data){
                $uibModal.open({
                    keyboard: false,
                    size: 'lg',
                  //  switchStatus : 'true',
                    backdrop: 'static',  
                    templateUrl: 'modules/pb-elements/templates/add-account-flow.html',
                    controller: 'BootstrapUiAddAccountModalController as pbAddAccountmodal',
                    resolve: {
                        account: function() { return account; },
                        data: function () { return data;},
                       }
                })

             }

            _this.notifications = function(){
                $uibModal.open({
                    templateUrl: 'modules/dashboard/templates/modals/notifications.html',
                    controller: 'NotificationsModalController',
                    keyboard: false,
                    size: 'lg',
                    backdrop: 'static',
                    resolve : {

                    }
                })
            }

            _this.nonMeterNotifications = function(){
                $uibModal.open({
                    templateUrl: 'modules/dashboard/templates/modals/non-meter-notifications.html',
                    controller: 'NotificationsModalController',
                    keyboard: false,
                    size: 'lg',
                    backdrop: 'static',
                    resolve : {

                    }
                })
            }

         }

        function link(scope, element, attrs, controller) {

           // scope.icon_smart_link = '../images/smartlink_icon.png';

            scope.addFunds= false;
            scope.editFunds= false;
            //scope.quantity =1;
            scope.signUp=true;
            scope.notSignedUp=false;

           controller.viewMoreProducts = function() {
                controller.limitVal += 7;
            };

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
                $scope.status.isopen = !$scope.status.isopen;
            };


        }

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-products.html',
            controllerAs: 'pbProductsModuleCtrl',
            controller: controller,
            scope: true,
            bindToController: {
                'moduleTitle': '@',
                'model': '='
            },
            link: link
        };
    }]);
})();