(function() {

  'use strict';

  angular.module('pb.ds.patterns').config(function($stateProvider) {
    $stateProvider.state('patterns', {
      abstract: true,
      url: '/patterns',
      templateUrl: 'modules/patterns/templates/patterns.html',
      controller: 'PatternsController as patterns',
      data: {
        pageTitle: 'Patterns',
        access: 'public',
        bodyClass: 'patterns'
      }
    })


    .state('patterns.headersfooters', {
      url: '/headersfooters',
      templateUrl: 'modules/patterns/templates/headers-footers.html',
      controller: 'PatternsController as patterns',
      data: {
        pageTitle: 'Patterns - Header & Footers',
        access: 'public',
        bodyClass: 'patterns'
      }
    })

    .state('patterns.welcome', {
      url: '/welcome',
      templateUrl: 'modules/patterns/templates/welcome-landing.html',
      controller: 'WelcomeController as welcome'
    })

    .state('patterns.signinup', {
      url: '/patterns/signinup',
      templateUrl: 'modules/patterns/templates/sign-in-sign-up.html'
    })

    //this is the signin example page
    .state('patterns.signin', {
      url: '/patterns/signin',
      templateUrl: 'modules/patterns/templates/signin.html',
      controller: 'SignInController as signin',
      data: {
        bodyClass: 'signin'
      }
    })

    //this is the reset password example page
    .state('patterns.reset-password', {
      url: '/patterns/resetpassword',
      templateUrl: 'modules/patterns/templates/reset-password.html',
      data: {
        bodyClass: 'signin'
      }
    })

    //this is the reset password example page
    .state('patterns.sign-up', {
      url: '/patterns/signup',
      templateUrl: 'modules/patterns/templates/sign-up.html',
      controller: 'SignInController as signin',
      data: {
        bodyClass: 'signin'
      }
    })

    //this is the reset password example page
    .state('patterns.youre-invited', {
      url: '/patterns/youreinvited',
      templateUrl: 'modules/patterns/templates/your-invited.html',
      controller: 'SignInController as signin',
      data: {
        bodyClass: 'signin'
      }
    })

    .state('patterns.dashboards', {
      url: '/patterns/dashboards',
      templateUrl: 'modules/patterns/templates/dashboards.html'
    })

    .state('patterns.gettingstarted', {
      url: '/patterns/gettingstarted',
      templateUrl: 'modules/patterns/templates/getting-started.html'
    })

    .state('patterns.facetedsearch', {
      url: '/patterns/facetedsearch',
      templateUrl: 'modules/patterns/templates/faceted-search.html'
    })

    .state('patterns.errorpages', {
      url: '/patterns/errorpages',
      templateUrl: 'modules/patterns/templates/error-pages.html'
    })

    .state('patterns.forms', {
      url: '/patterns/forms',
      templateUrl: 'modules/patterns/templates/forms-containers.html'
    })




    .state('patterns.forgotpassword', {
      url: '/patterns/forgotpassword',
      templateUrl: 'modules/patterns/templates/forgot-password.html',
      controller: 'ForgotPasswordController as forgot'
    })



    .state('patterns.registration', {
      url: '/patterns/registration',
      templateUrl: 'modules/patterns/templates/registration.html',
      controller: 'RegistrationController as registration'
    })

    .state('patterns.undermaintenance', {
      url: '/patterns/undermaintenance',
      templateUrl: 'modules/patterns/templates/under-maintenance.html',
      controller: 'UnderMaintenanceController as under'
    })

    .state('patterns.500', {
      url: '/patterns/500',
      templateUrl: 'modules/patterns/templates/500.html',
      controller: '500Controller'
    })

    .state('patterns.404', {
      url: '/patterns/404',
      templateUrl: 'modules/patterns/templates/404.html',
      controller: '404Controller'
    });







  });

})();
