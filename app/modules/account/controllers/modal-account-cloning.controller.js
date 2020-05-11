(function() {

    'use strict';

    angular.module('pb.account').controller('BootstrapUiAccountCloningtModalController',  ['$scope','$state', '$uibModalInstance','MockDataFactory', 'data',
        function($scope,$state, $uibModalInstance, MockDataFactory, data) {
            var _this = this;
            $scope.model = data;
            $scope.confirm = false;


              $scope.close = function() {
                $scope.modalForm.$setPristine();
                $uibModalInstance.dismiss('cancel');
            };

            $scope.next = {

                invitationsent: function invitationsent(form) {
                    if (form.$valid) {
                         $scope.confirm=true;
                    }
                }
            };

        }]);

})();

