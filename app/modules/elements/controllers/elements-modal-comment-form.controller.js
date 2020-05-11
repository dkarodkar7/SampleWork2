(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiCommentFormModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
