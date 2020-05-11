(function() {

    'use strict';
    angular.module('pb.registration').controller('RegistrationCtrl', ['$log', '$scope', '$state', 'MockDataFactory', 'user',
    function($log, $scope, $state, MockDataFactory, user) {

      $scope.user = user;

      $scope.resendEmail1 = function(user) {
        MockDataFactory.get({filename: 'user'}).$promise.then(function() {
           alert('Email 1 Sent!');
        });
      }

      $scope.resendEmail2 = function(user) {
        MockDataFactory.get({filename: 'user'}).$promise.then(function() {
           alert('Email 2 Sent!');
        });
      }
  }]);
})();
