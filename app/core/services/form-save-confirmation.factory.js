(function() {
    'use strict';

    angular.module('app').factory('FormSaveConfirmation', ['$rootScope', '$uibModal', function($rootScope, $uibModal) {

        return function(event, $scope, toState, toParams, fromState, fromParams){

            if ($scope.form.$pristine || $rootScope.leaveStatus ) {
                $rootScope.leaveStatus = false;
                return;
            }

            event.preventDefault();

            $uibModal.open({
                size: 'lg',
                templateUrl: 'modules/account/templates/modals/new-page-confirmation.html',
                controller: 'BootstrapUiNewPageConfirmationModalController as newPageCtrl',
                resolve: {
                    //formToSave: function () { return formToSave },
                    newPage: function() { return toState; }
                }
            });

        };

    }]);
})();