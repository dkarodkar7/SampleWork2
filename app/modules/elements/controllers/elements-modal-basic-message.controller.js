(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiBasicMessageModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
