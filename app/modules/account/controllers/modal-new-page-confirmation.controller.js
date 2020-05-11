(function() {

  'use strict';
  angular.module('pb.account').controller('BootstrapUiNewPageConfirmationModalController', ['$uibModalInstance', '$scope', 'newPage', '$rootScope', //'formToSave'
      function($uibModalInstance, $scope, newPage, $rootScope) { //formToSave
          var _this = this;

          _this.newPage = newPage;

          _this.setLeaveStatus = function(_bool){
              $rootScope.leaveStatus = _bool;

              _this.close();
          };

          _this.close = function() {
              $uibModalInstance.close();
          };

  }]);

})();