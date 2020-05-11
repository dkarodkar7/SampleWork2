(function() {

  'use strict';

  angular.module('pb.ds.home').config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'modules/home/templates/home.html',
      controller: 'HomeController as home',
      resolve: {
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Home',
        access: 'public',
        bodyClass: 'home'
      }
    });
  });

})();
