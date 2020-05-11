(function() {

    'use strict';
    angular.module('pb.account').controller('ForgotPasswordCtrl', ['$log', '$scope', '$state', 'MockDataFactory',
    function($log, $scope, $state, MockDataFactory) {

    $scope.checkEmail = function(){
      //check if user email is valid 
      var email = $scope.user.email;
      return true;
    }

    $scope.getSecurityQuestion = function(user){
      //user the user.email to get security question from server
      $scope.user.securityQuestion = MockDataFactory.get({filename: 'forgotpassword_question'});
    };

    $scope.submit = function(user, form) {
      if(form.$valid) {
        if(user.resetOption == 'email') {
          //make a request to email user a password reset link and show success message
          $scope.emailSent = true;
        } else{
          //checking if the user's answer is correct with answer input
          if(form.answer.$viewValue != $scope.user.securityQuestion.answer){ 
            user.status = 'failed';
          } else {
            //make server request to get user id / session id that can be attached to the url for password reset page
            $state.go('account.resetpassword', { id : '123456789' });
          }
        }
      }
    };
  }]);

})();
