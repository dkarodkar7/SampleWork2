(function() {

  'use strict';

  angular.module('pb.ds.mobile').config(function($stateProvider) {
    $stateProvider.state('mobile', {
      url: '/mobile',
      abstract: true,
      templateUrl: 'modules/mobile/templates/mobile.html',
      controller: 'MobileController as mobile',
      data: {
        pageTitle: 'Mobile',
        access: 'public',
        bodyClass: 'mobile'
      }
    })

    //FOUNDATION
    .state('mobile.color', {
      url: '/color',
      templateUrl: 'modules/mobile/templates/mobile-color.html'
    })

    .state('mobile.typography', {
      url: '/typography',
      templateUrl: 'modules/mobile/templates/mobile-typography.html'
    })

    .state('mobile.grid', {
      url: '/grid',
      templateUrl: 'modules/mobile/templates/mobile-grid.html'
    })

    //ELEMENTS
    .state('mobile.buttons', {
      url: '/buttons',
      templateUrl: 'modules/mobile/templates/mobile-buttons.html'
    })

    .state('mobile.uicontrols', {
      url: '/uicontrols',
      templateUrl: 'modules/mobile/templates/mobile-uicontrols.html'
    })

    .state('mobile.containers', {
      url: '/containers',
      templateUrl: 'modules/mobile/templates/mobile-containers.html'
    })

    .state('mobile.modals-popovers', {
      url: '/modals-popovers',
      templateUrl: 'modules/mobile/templates/mobile-modals-popovers.html'
    })

    .state('mobile.lists-grids', {
      url: '/lists-grids',
      templateUrl: 'modules/mobile/templates/mobile-lists-grids.html'
    })

    .state('mobile.user-feedback', {
      url: '/user-feedback',
      templateUrl: 'modules/mobile/templates/mobile-user-feedback.html'
    })

    .state('mobile.prototype', {
      url: '/prototype',
      templateUrl: 'modules/mobile/templates/mobile-prototype.html'
    })

    //PATTERNS
    .state('mobile.navigation', {
      url: '/navigation',
      templateUrl: 'modules/mobile/templates/mobile-navigation.html'
    })

    .state('mobile.sign-in-up', {
      url: '/sign-in-up',
      templateUrl: 'modules/mobile/templates/mobile-sign-in-up.html'
    })

    .state('mobile.onboarding', {
      url: '/onboarding',
      templateUrl: 'modules/mobile/templates/mobile-onboarding.html'
    })

    .state('mobile.welcome', {
      url: '/welcome',
      templateUrl: 'modules/mobile/templates/mobile-welcome.html'
    })

    .state('mobile.getting-started', {
      url: '/getting-started',
      templateUrl: 'modules/mobile/templates/mobile-getting-started.html'
    })

    .state('mobile.landing', {
      url: '/landing',
      templateUrl: 'modules/mobile/templates/mobile-landing.html'
    })

    .state('mobile.homepage', {
      url: '/homepage',
      templateUrl: 'modules/mobile/templates/mobile-homepage.html'
    })

    .state('mobile.search-results', {
      url: '/search-results',
      templateUrl: 'modules/mobile/templates/mobile-search-results.html'
    })

    .state('mobile.forms', {
      url: '/forms',
      templateUrl: 'modules/mobile/templates/mobile-forms.html'
    })

    .state('mobile.maps', {
      url: '/maps',
      templateUrl: 'modules/mobile/templates/mobile-maps.html'
    });

  });

})();
