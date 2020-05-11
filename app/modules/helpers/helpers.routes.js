(function() {

  'use strict';

  angular.module('pb.ds.helpers').config(function($stateProvider) {
    $stateProvider.state('helpers', {
      url: '/helpers',
      templateUrl: 'modules/helpers/templates/helpers.html',
      controller: 'HelpersController as helpers',
      data: {
        pageTitle: 'Helpers',
        access: 'public',
        bodyClass: 'helpers'
      }
    });
  });

})();
