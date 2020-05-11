(function() {

    'use strict';

    angular.module('pb.casemanagement').controller('schedulerModalController',  ['$scope','$state', '$uibModalInstance',
        function($scope,$state, $uibModalInstance) {
            var _this = this;

            $scope.close = function() {
                $uibModalInstance.dismiss('cancel');
            };



        }]);

})();

