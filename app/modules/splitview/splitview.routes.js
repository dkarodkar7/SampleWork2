(function() {

  'use strict';

  angular.module('pb.ds.splitview').config(function($stateProvider) {
    $stateProvider.state('splitview', {
      abstract: true,
      url: '/splitview',
      templateUrl: 'modules/splitview/templates/splitview.html',
      controller: 'SplitviewController as splitview'
    })

    .state('splitview.overview', {
      url: '/overview',
      templateUrl: 'modules/splitview/templates/splitview-overview.html',
      data: {
        pageTitle: 'Split Views - Overview',
        access: 'public',
        bodyClass: ''
      }
    })

    .state('splitview.one', {
      url: '/splitview/one',
      templateUrl: 'modules/splitview/templates/splitview-one.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-filled'
      }
    })

    .state('splitview.two', {
      url: '/splitview/two',
      templateUrl: 'modules/splitview/templates/splitview-two.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-white'
      }
    })

    .state('splitview.three', {
      url: '/splitview/three',
      templateUrl: 'modules/splitview/templates/splitview-three.html',
      data: {
        pageTitle: 'Split Views - three',
        access: 'public',
        bodyClass: 'splitview splitview-white-filled'
      }
    })

    .state('splitview.four', {
      url: '/splitview/four',
      templateUrl: 'modules/splitview/templates/splitview-four.html',
      data: {
        pageTitle: 'Split Views - Four',
        access: 'public',
        bodyClass: 'splitview splitview-white-open'
      }
    })

    .state('splitview.five', {
      url: '/splitview/five',
      templateUrl: 'modules/splitview/templates/splitview-five.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-white-open'
      }
    })

    .state('splitview.six', {
      url: '/splitview/six',
      templateUrl: 'modules/splitview/templates/splitview-six.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-white-open'
      }
    })

    .state('splitview.seven', {
      url: '/splitview/seven',
      templateUrl: 'modules/splitview/templates/splitview-seven.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-white-open'
      }
    });


  });

})();
