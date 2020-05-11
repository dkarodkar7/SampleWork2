(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiModalController', function($scope, $modalInstance) {
    $scope.close = function() {
      $modalInstance.close();
    };
  });

})();
