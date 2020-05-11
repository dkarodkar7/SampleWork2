(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiWithCopyModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
