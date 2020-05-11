(function() {

    'use strict';
    angular.module('pb.account').controller('ProfileManagementBasicInfoCtrl', ['$log', '$scope', '$state', 'MockDataFactory', 'user', 'FormSaveConfirmation',
        function($log, $scope, $state, MockDataFactory, user, FormSaveConfirmation) {

            var _this = this;

            _this.user = user;

            $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                FormSaveConfirmation(event, $scope, toState);
            });

            _this.updateBasic = function(user, form)
            {
                if(form.$valid) {
                    //update user on server
                    MockDataFactory.get({filename: 'user'}).$promise.then(function(data){
                            //success go to success page
                            _this.saved = true;
                            form.$setPristine();
                        },
                        function(data){
                            //registration failed
                        });
                }
            }

        }]);

})();
