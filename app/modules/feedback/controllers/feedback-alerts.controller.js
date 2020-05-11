(function() {

  'use strict';

  angular.module('pb.ds.feedback').controller('AlertsController', function($log, $uibModal) {

    var _this = this;

    _this.transitoryAlert = {
      fadeIn: 500,
      fadeOut: 1000,
      delay: 2000,
      message: '<strong>Success!</strong> Data was saved.',
      messageClass: 'text-success'
    };

  });

})();
