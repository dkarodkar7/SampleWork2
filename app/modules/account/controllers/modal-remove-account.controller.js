(function() {

  'use strict';
  angular.module('pb.account').controller('BootstrapUiRemoveAccountModalController', ['$uibModalInstance', 'accounts', 'account',
      function($uibModalInstance, accounts, account) {
          var _this = this;

          _this.account = account;
          _this.removeAccount = removeAccount;

          _this.close = function() {
              $uibModalInstance.close();
          };

          function removeAccount(account) {

              var accountPos = accounts.map(function(x) {return x.accountNumber; }).indexOf(account);
              accounts.splice(accountPos, 1);
              $uibModalInstance.close();
          }

  }]);

})();