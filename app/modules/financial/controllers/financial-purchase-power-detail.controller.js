(function() {

    'use strict';

    angular.module('pb.financial').controller('FinancialPurchasePowerDetailController', ['$log', '$scope', 'MockDataFactory',
    function($log, $scope, MockDataFactory) {

        var _this = this;

        // orange notifications at top of the page - should be limited 2 only 2 notifications
        MockDataFactory.query({filename: 'notifications'}).$promise.then(function(data){

            _this.notifications = data[0].PurchasePower[1].detail;

        });

        MockDataFactory.query({filename: 'financial_detail'}).$promise.then(function(data){

            _this.detail = data;

        });
        MockDataFactory.get({filename: 'financial_tandem'}).$promise.then(function(data){

            _this.financialOverview = data.ppaccountsArray[0];

        });

       // $scope.config1 = function(uibDatepickerConfig) {
         //   uibDatepickerConfig.showWeeks = false;
           // uibDatepickerConfig.showButtonBar = false;
        //};
        $scope.formats = ['MM-dd-yyyy'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];


        $scope.opened = {};
        $scope.opened.openedStart = false;
        $scope.opened.openedEnd = false;

        $scope.open = function($event,datepicker) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened[datepicker] = true;
        };

    }]);

})();
