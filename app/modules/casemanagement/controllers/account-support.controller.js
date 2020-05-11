(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('AccountSupportCtrl',
        ['$log', '$scope','MockDataFactory', '$state', '$stateParams',
            function($log, $scope, MockDataFactory, $state, $stateParams) {

              var _this = this;
               var issues;

                MockDataFactory.get({filename: 'account_support'}).$promise.then(function(data){
                    _this.issues = data.issues;

                });
                $scope.accounttypeofissue = function() {
                    $state.go('casemanagement.accounttypeofissue');
                }

            }]);

})();
