(function() {

  'use strict';

  angular.module('pb.ds.writing').config(function($stateProvider) {
    $stateProvider.state('writing', {
      url: '/writing',
      templateUrl: 'modules/writing/templates/writing.html',
      controller: 'WritingController as writing',
      data: {
        pageTitle: 'Product Writing',
        access: 'public',
        bodyClass: 'writing'
      }
    });


  });

})();
