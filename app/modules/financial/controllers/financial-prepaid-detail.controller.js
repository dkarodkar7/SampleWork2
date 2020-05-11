(function() {

    'use strict';

    angular.module('pb.financial').controller('FinancialPrepaidDetailController', ['$log', '$scope', 'MockDataFactory', 'moment',
    function($log, $scope, MockDataFactory, moment) {

        var _this = this;

        MockDataFactory.query({filename: 'notificationWarning'}).$promise.then(function(data){
            _this.notificationsInline = data[1].PrePaid;
        });

        // orange notifications at top of the page - should be limited 2 only 2 notifications
        MockDataFactory.query({filename: 'notifications'}).$promise.then(function(data){

            _this.notifications = data[1].PrePaid;

        });

        MockDataFactory.query({filename: 'financial_detail'}).$promise.then(function(data){

            _this.detail = data;
            // set filter once data is loaded
            $scope.$parent.checkMonthYear(moment().month(), moment().year());

        });
        MockDataFactory.get({filename: 'financial_tandem'}).$promise.then(function(data){

            _this.financialOverview = data.accountsArray[0];

        });

    }]);

})();
