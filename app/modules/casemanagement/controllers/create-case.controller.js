(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('CreateCaseCtrl',
      ['$log', '$scope','$rootScope', '$controller', '$state', '$stateParams',
      function($log, $scope,$rootScope, $controller, $state, $stateParams) {

          $scope.init = function appendText(){
              var myEl = angular.element( document.querySelector( '.tags ul.filter-tabs li.tag--main.secondary' ) );
              var myE2 = angular.element( document.querySelector( '.tags ul.filter-tabs li.tag--main.last' ) );
              myEl.removeClass('placeholder');
              myE2.removeClass('placeholder');

          }
          $scope.init();

          $scope.technicalsupport = function() {
              $state.go('casemanagement.technicalsupport');

          }
          $scope.accountsupport = function() {
              $rootScope.accountselectionissue = false;
                $state.go('casemanagement.selectissue');
            
              }

      }]);

})();
