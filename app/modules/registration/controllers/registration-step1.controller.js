(function() {

    'use strict';
    angular.module('pb.registration').controller('RegistrationStep1Ctrl', ['$log', '$scope', '$state', '$uibModal', 'MockDataFactory',
    function($log, $scope, $state, $uibModal, MockDataFactory) {

      $scope.user = {};
      $scope.data =   MockDataFactory.get({filename: 'registration'});

      $scope.register = function(user, form) {
        if(form.$valid) {
            user.status = null;
            //replace call with server register call
            MockDataFactory.get({filename: 'registration'}).$promise.then(function(data){
              //account number and email match => goto step2
              //$state.go('register.step2', {id : user.accountNumber});

              //for demo looping through mock data and setting status
              angular.forEach(data.emails, function(value, key) {
                  if(value.email == user.email) {
                    user.status = value.status;
                  }
                });

              if(user.status == 'confirm') {
                $scope.confirmInformation($scope.data);
              } else if(user.status == null) {
                  //change user's flow to cold 
                  $state.go('register.step2', {id : user.accountNumber, registered : false});
              }
            },
            function(data){
              //account validation failed on server
              //status would be inactive, registered, onboarded or confirm
              user.status = data.status;

              if(user.status == 'confirm') {
                //pass in the company details, accountNumber etc returned from the server to the modal
                $scope.confirmInformation($scope.data);
              }
          });
        }
      }

      $scope.resendEmail = function(user) {
        MockDataFactory.sendEmail(user.email).$promise.then(function() {
          $state.go('registerationsuccess');
        });
      }

      $scope.confirmInformation = function(data) {
        $uibModal.open({
          templateUrl: 'modules/registration/templates/modals/confirm-information.html',
          controller: 'RegisterConfirmInformationModalController',
          keyboard: false,
          size: 'md',
          //windowClass : '',
          backdrop: 'static',
          resolve : {
            data: function () {
              return data;
            }
          }
        }).result.then(function(confirmationModel) {
          //validate the confirmationModel.question and confirmationModel.answer on server before redirecting
          //console.log(confirmationModel);
          MockDataFactory.get({filename: 'registration'}).$promise.then(function(){
            //question/answer validated => goto registration step 2 => pass in the user id in the url
              $state.go('register.step2', {id : data.accountNumber, registered : false });
          });
        });
      }
  }]);
})();
