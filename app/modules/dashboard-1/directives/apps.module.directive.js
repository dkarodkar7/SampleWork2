(function() {
    'use strict';
    angular.module('app').directive('pbAppsModule', function() {

        function controller($scope, $element, MockDataFactory) {
            // Initialized for ControllerAs binding
            var _this = this;

            _this.model.$promise.then(null,
                function(){
                    _this.promiseResolvedFailed = true;
                }
            );
        }


        function link(scope, element, attrs, controller) {
            controller.carrierList = [
                'USPS',
                'FedEx',
                'UPS'
            ];

            // Moack tracking status data
            controller.mockTrackingActivity = [
                {
                    status: 'Arrived at USPS Origin Facility',
                    time: '12:03 PM',
                    date: '5/7/2015',
                    location: 'Kearny, NJ 011205'
                },
                {
                    status: 'Accepted at USPS Origin SOrt Facility',
                    time: '11:52 PM',
                    date: '5/6/2015',
                    location: 'Derby, CT 011205'
                },
                {
                    status: 'Pre-Shipment Info Sent to USPS',
                    time: '10:06 PM',
                    date: '5/3/2015',
                    location: ''
                },
                {
                    status: 'Pre-Shipment Info Sent to USPS',
                    time: '10:06 PM',
                    date: '5/3/2015',
                    location: ''
                },
                {
                    status: 'Pre-Shipment Info Sent to USPS',
                    time: '10:06 PM',
                    date: '5/3/2015',
                    location: ''
                }
            ];

            controller.showTrackingResults = function(){
                controller.showTrackingList = controller.trackingNumber ? true : false;

            };

            controller.clearTrackingResults = function(){
                controller.showTrackingList = false;
            };

            controller.mobileClose = function($event) {
                $($event.currentTarget).parents('.dropdown').removeClass('open');
            };
        }

        return {
            restrict: 'E',
            templateUrl: 'modules/dashboard/templates/dashboard-module-apps.html',
            controllerAs: 'pbAppsModuleCtrl',
            controller: controller,
            scope: true,
            bindToController: {
                'moduleTitle': '@',
                'model': '='
            },
            link: link
        };
    });
})();