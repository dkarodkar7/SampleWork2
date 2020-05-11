(function() {
    'use strict';
    angular.module('pb.account').controller('LoginCtrl', 
      ['$log', '$scope', '$controller', '$state', '$stateParams', '$cookies' , '$uibModal', 'config' , 'MockDataFactory', 'user',
      function($log, $scope, $controller, $state, $stateParams, $cookies,$uibModal, config, MockDataFactory, user) {
      
      $scope.user = {loginAttempt : 0, state : $stateParams.state , email : $cookies.get(config.rememberMeCookieName) ,
          rememberMe : $cookies.get(config.rememberMeCookieName) != null };

      $scope.loginUser = function(user, form) {

        if(form.$valid) {
          user.status = '';
          var password = '';
          //login user on server
          MockDataFactory.get({filename: 'registration'}).$promise.then(function(data){
            
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
                user.loginAttempt++;
              } else if(password === user.password && user.status === 'registered'){
                if(user.rememberMe){
                  $cookies.put(config.rememberMeCookieName, user.email);
                } else {
                  $cookies.remove(config.rememberMeCookieName);
                }
                $scope.header.userAuthenticated = true;
                $state.go('dashboard.page');
              }
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

      $scope.resendEmail1 = function(user) {
        alert('Email 1 Sent');
      }

      $scope.resendEmail2 = function(user) {
        alert('Email 2 Sent');
      }


        $scope.emailCoversionModal = function (account, data) {
            $uibModal.open({
                  size: 'lg',
                  templateUrl: 'modules/account/templates/modals/email-conversion.html',
                  controller: 'EmailConversionModalController',
                  resolve: {
                    account: function () {
                      return account;
                    },
                    data: function () {
                      return data;
                    }

                  }
                })
                .result.then(function (confirmationModel) {
            });

          };


  }]);

})();
