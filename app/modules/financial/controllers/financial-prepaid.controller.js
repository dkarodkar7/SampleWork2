  (function() {

    'use strict';

    angular.module('pb.financial').controller('FinancialPrepaidController', ['$log', '$scope', 'MockDataFactory',
        function($log, $scope, MockDataFactory) {

        var _this = this;

        MockDataFactory.query({filename: 'notificationWarning'}).$promise.then(function(data){
            _this.notificationsInline = data[1].PrePaid;
        });

        // orange notifications at top of the page - should be limited 2 only 2 notifications
        MockDataFactory.query({filename: 'notifications'}).$promise.then(function(data){

            _this.notifications = data[1].PrePaid;

        });
        MockDataFactory.get({filename: 'financial_tandem'}).$promise.then(function(data){

            _this.accountListTandem = data.accountsArray

        });

        MockDataFactory.get({filename: 'financial_tandem'}).$promise.then(function(data){

            _this.accountGeneral = data

        });

        }]);

})();
