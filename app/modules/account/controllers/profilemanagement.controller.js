(function() {
    'use strict';

    angular.module('pb.account')
        .controller(
        'ProfileManagementCtrl', ['$log', '$scope',
            function($log, $scope) {

                $scope.tabsWidthClass = 'skinny';

                // Tabs stuff
                $scope.tabs = [
                    {
                        link        : 'account.profilemanagement.basicinfo',
                        label       : 'Basic Info',
                        currentTab  : '#basic-info',
                        bootstrapClass: 'col-sm-4'
                    },
                    {
                        link        : 'account.profilemanagement.password',
                        label       : 'Password & Security',
                        currentTab  : '#password-security',
                        bootstrapClass: 'col-sm-4'
                    },
                    {
                        link        : 'account.profilemanagement.dashboard',
                        label       : 'Manage Accounts & Settings',
                        currentTab  : '#dashboard-setttings',
                        bootstrapClass: 'col-sm-4'
                    }
                ];

            }]);

})();

