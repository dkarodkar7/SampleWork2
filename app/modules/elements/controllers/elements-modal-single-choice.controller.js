(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiSingleChoiceModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
