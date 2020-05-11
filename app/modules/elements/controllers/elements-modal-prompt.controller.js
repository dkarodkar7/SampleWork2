(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiPromptModalController', function($scope, $modalInstance) {

    $scope.fullname = '';

    $scope.close = function() {
      $modalInstance.close();
    };

    $scope.save = function() {
      $modalInstance.close($scope.form.fullname.$modelValue);
    };

  });

})();
