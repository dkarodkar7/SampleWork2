(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiRadioButtonsModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
