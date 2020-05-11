(function() {
    'use strict';

    angular.module('pb.dashboard').controller('DashboardCtrl', ['$log', '$scope', 'MockDataFactory', '$timeout', '$location', '$rootScope', '$uibModal',
        function($log, $scope, MockDataFactory, $timeout, $location, $rootScope, $uibModal) {

        var _this = this;

        // Models
        //
        _this.financialModel         = MockDataFactory.query({ filename: 'financial_list' });
        _this.orderHistoryModel      = MockDataFactory.query({ filename: 'order_history' });
        _this.productsModel          = MockDataFactory.query({ filename: 'my_products' });
        _this.userModel              = MockDataFactory.get({ filename: 'user' }).$promise.then( function(data) {
            //check cookie to see if person has seen this 
            if(!data.hasSeenTour){
                //console.log(data.hasSeenTour);
                $uibModal.open({
                    templateUrl: 'modules/dashboard/templates/modals/onboarding.html',
                    controller: 'OnboardingModalController as onboardingModalCtrl',
                    keyboard: false,
                    size: 'onboard',
                    backdrop: 'static',
                    resolve: {
                        user: function(){
                            return data;
                        }
                    }
                }).result.then(function(data) {
                    //if there is a save function for this 
                    _this.userModel.hasSeenTour = true;
                });
            }
        });

        // Promises promises
        //
        MockDataFactory.query({filename: 'notification_dashboard'}).$promise.then( function(data) {
            // Extracting notifications data so we can do
            // some fake notifications and messages deletion
            //
            _this.notificationsModel = {
                notificationsList   : data[0].notifications,
                messagesList        : data[0].messages,

                // Integers
                numOfNotifications  : data[0].notifications.length,
                numOfMessages       : data[0].messages.length,
                totalNotifications  : data[0].notifications.length + data[0].messages.length
            };
        });



        $scope.decrementNotificationsCount = function() {
            // Assign value updating routine to function
            // so we can call it from another controller
            //
            _this.notificationsModel.numOfNotifications -= 1;
        };
        $scope.decrementMessagesCount = function() {
            // Assign value updating routine to function
            // so we can call it from another controller
            //
            _this.notificationsModel.numOfMessages -= 1;
        };

        $rootScope.$on('$locationChangeSuccess', function(event){
            var url = $location.url(),
                params = $location.search();

            // to show notifications expanded on load if notification is clicked from dropdown
            if (params.notifications){
                _this.showNotifications = true;
            } else {
                _this.showNotifications = false;
            }


        });

        $scope.$watchGroup(
            [
                'dashboard.notificationsModel.numOfNotifications',
                'dashboard.notificationsModel.numOfMessages'
            ]
            , function(newValues, oldValues, scope) {
                // newValues array contains the current values of the watch expressions
                // with the indexes matching those of the watchExpression array
                // i.e.
                // newValues[0] -> $scope.foo
                // and
                // newValues[1] -> $scope.bar

                // Set val true if there are notifications/messages
                _this.haveNotifications = newValues[0] > 0;
                _this.haveMessages      = newValues[1] > 0;
            }
        );

    }]);
})();