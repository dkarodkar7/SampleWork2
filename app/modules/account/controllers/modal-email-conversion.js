(function() {

    'use strict';

    angular.module('pb.account').controller('EmailConversionModalController',  ['$scope', '$state', '$uibModalInstance',
        function($scope, $state, $uibModalInstance) {

            //       $scope.model = data;
            //Grab data for registration question
            // $scope.questions = MockDataFactory.query({filename: 'registration_questions'});

            $scope.close = function() {
                   $uibModalInstance.dismiss('cancel');
            };


            $scope.account = function(form) {
                if(form.$valid) {
                    //register user on server
                    $state.go('account.success');
                    $uibModalInstance.dismiss('cancel');
                }
                }

            /*($scope.loginUser = function(user, form) {

                if(form.$valid) {
                    user.status = '';
                    var password = '';
                    //login user on server
                    MockDataFactory.get({filename: 'registration'}).$promise.then(function(data){
                            //success go to success page

                            //for demo looping through list of emails in mock data
                            angular.forEach(data.emails, function(value, key) {
                                if(value.email == user.email){
                                    user.status = value.status;
                                    password = value.password;
                                }
                            });
                            //check password and set failed state
                            if(password !== user.password){
                                user.status = 'failed';
                            } else if(password === user.password && user.status == 'registered'){
                                if(user.rememberMe){
                                    $cookies.put(config.rememberMeCookieName, user.email);
                                } else {
                                    $cookies.remove(config.rememberMeCookieName);
                                }
                                $state.go('dashboard.page');
                            }
                            user.loginAttempt++;
                        },
                        function(data){
                            //login failed
                            user.loginAttempt++;
                            //set user status from data.status
                            user.status = 'failed';
                            //user.status = 'onboarded';
                            //user.status = 'inactive';
                        });
                }
            }
*/

        }]);

})();
