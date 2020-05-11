(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiDraggableModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
