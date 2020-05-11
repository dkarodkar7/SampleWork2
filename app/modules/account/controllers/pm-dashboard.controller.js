(function() {

    'use strict';
    angular.module('pb.account').controller('ProfileManagementDashboardCtrl', ['$log', '$rootScope', '$scope', '$state', 'MockDataFactory', 'user', '$uibModal', 'FormSaveConfirmation',
        function($log, $rootScope, $scope, $state, MockDataFactory, user, $uibModal, FormSaveConfirmation) {
            var _this = this;
            _this.user = user;

            $scope.data =   MockDataFactory.get({filename: 'registration'});


            $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                FormSaveConfirmation(event, $scope, toState);
            });

                _this.updateDashboard = function(user, form)
            {
                if(form.$valid) {
                    //update user on server
                    MockDataFactory.get({filename: 'user'}).$promise.then(function(data){
                            //success go to success page
                            // currently showing success message instead of new page
                            //$state.go('account.profilemanagement.dashboard');
                            _this.saved = true;
                            form.$setPristine();
                        },
                        function(data){
                            //registration failed
                        });
                }
            };


            _this.modals = {
               addAccountModal: function (account,data) {
                   $uibModal.open({
                           size: 'lg',
                           templateUrl: 'modules/pb-elements/templates/add-account-flow.html',
                           controller: 'BootstrapUiAddAccountModalController as pbAddAccountmodal',
                           resolve: {
                               account: function() { return account; },
                               data: function () { return data;}

               }
                       })
                       .result.then(function(confirmationModel) {
                       });

               },
                removeAccountModal: function (account) {
                    $uibModal.open({
                        size: 'lg',
                        templateUrl: 'modules/account/templates/modals/remove-account.html',
                        controller: 'BootstrapUiRemoveAccountModalController as removeAccountCtrl',
                        resolve: {
                            accounts: function () { return _this.user.accounts },
                            account: function() { return account; }
                        }
                    });
                },
                NewPageConfirmationModal: function (formToSave, newPage) {
                    $uibModal.open({
                        size: 'lg',
                        templateUrl: 'modules/account/templates/modals/new-page-confirmation.html',
                        controller: 'BootstrapUiNewPageConfirmationModalController as newPageCtrl',
                        resolve: {
                            formToSave: function () { return formToSave },
                            newPage: function() { return newPage; }
                        }
                    });
                },
                accountCloningModal: function (data) {
                    $uibModal.open({
                            size: 'lg',
                            //switchStatus :'false',
                            templateUrl: 'modules/account/templates/modals/account-cloning.html',
                            controller: 'BootstrapUiAccountCloningtModalController as pbAccountCloningmodal',
                            resolve: {
                                data: function () { return data;}
                            }
                        })
                        .result.then(function() {
                    });
                }

            };


        }]);

})();
