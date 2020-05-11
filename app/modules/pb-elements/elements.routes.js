(function() {

  'use strict';

  angular.module('pb.elements').config(function($stateProvider) {
    $stateProvider.state('pbelements', {
      url: '',
      abstract: true,
      templateUrl: 'modules/pb-elements/templates/elements.html',
      controller: 'ElementsController as elements',
      resolve: {
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({
            filename: 'navigation'
          });
        }
      },
      data: {
        pageTitle: 'Elements',
        access: 'private'
      }
    })


    .state('pbelements.containers.page', {
      url: '',
      views: {
        'pb-tabs': {
          templateUrl: 'modules/pb-elements/templates/elements-tabs.html',
          controller: 'PbTabsController as pbTabs'
        },
        'pb-date-picker': {
          templateUrl: 'modules/pb-elements/templates/elements-date-picker.html',
          controller: 'PbUiBootstrapController as pbDatePick'
        },
        'pb-breadcrumbs': {
           templateUrl: 'modules/pb-elements/templates/elements-breadcrumbs.html',
           controller: 'PbBreadcrumbsController as pbBreadcrumbs'
        },
        'pb-addaccountmodal':{
          templateUrl: 'modules/pb-elements/templates/add-account-flow.html',
          controller: 'BootstrapUiAddAccountModalController as pbAddAccountmodal'
         }
      }
    })

    ;




  });

})();
