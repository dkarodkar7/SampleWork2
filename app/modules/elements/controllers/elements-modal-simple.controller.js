(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiSimpleModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
