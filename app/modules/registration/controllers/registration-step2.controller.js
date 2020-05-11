(function() {

    'use strict';
    angular.module('pb.registration').controller('RegistrationStep2Ctrl', ['$log', '$scope', '$stateParams', '$state', 'MockDataFactory', 'config', 'user',
    function($log, $scope, $stateParams, $state, MockDataFactory, config, user) {

      $scope.user = user;
      $scope.config = config;

      $scope.changeSecurityQuestion = function(){
        $scope.form.securityAnswer.$setPristine();
        $scope.form.securityAnswer.$setUntouched();
        user.securityAnswer = null;
      };

      $scope.register = function(user, form) {
        if(form.$valid) {
          //register user on server
          MockDataFactory.get({filename: 'registration'}).$promise.then(function(data){
            //check if the user is going through the warm flow or cold flow to route page
            var flow = $stateParams.registered ? 'cold' : 'warm';
            //console.log(flow);
            if(flow === 'warm'){
              $state.go('account.login', { state : 'new' });
            } else {
              $state.go('register.success'); 
            }
          
          },
          function(data){
          //registration failed
        });
        }
      }
  }]);
})();
