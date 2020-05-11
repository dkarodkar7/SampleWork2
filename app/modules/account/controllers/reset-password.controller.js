(function() {

    'use strict';
    angular.module('pb.account').controller('ResetPasswordCtrl', ['$log', '$scope', '$state', 'MockDataFactory', 'user',
    function($log, $scope, $state, MockDataFactory, user) {

      $scope.user = user;

      $scope.reset = function(user, form) {
        if(form.$valid) {
          //reset password on server and redirect user to login page
          $state.go('account.login', { state : 'reset' })
        }
      };
  }]);
})();
