(function() {

    'use strict';

    angular.module('pb.registration').config(function($stateProvider) {
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'modules/registration/templates/register.html',
            controller: 'RegistrationCtrl as registration',
            abstract: true,
            resolve : {
              user : function($stateParams, MockDataFactory)
                {
                  //get user from server using $stateParams.id
                 return MockDataFactory.get({filename: 'registration'});
                }
              }
        })

      .state('register.step1', {
        url: '/step1',
        templateUrl: 'modules/registration/templates/step1.html',
        controller: 'RegistrationStep1Ctrl as registration',
        data: {
            pageTitle: 'Registration',
            access: 'public',
            bodyClass: 'registration'
        }
      })

      .state('register.step2', {
            url: '/step2/:id/:registered',
            templateUrl: 'modules/registration/templates/step2.html',
            controller: 'RegistrationStep2Ctrl as registration',
            data: {
                pageTitle: 'Registration Step2',
                access: 'public',
                bodyClass: 'registration'
            }
        })

        .state('register.success', {
              url: '/success/:id',
              templateUrl: 'modules/registration/templates/success.html',
              data: {
                  pageTitle: 'Account Created',
                  access: 'public',
                  bodyClass: 'my-account'
              }

          })

          .state('register.link1expired', {
            url: '/l1-expired/:id',
            templateUrl: 'modules/registration/templates/e1-link-expired.html',
            data: {
                pageTitle: 'Registration - Link Expired',
                access: 'public',
                bodyClass: 'my-account'
            }
          })

          .state('register.link2expired', {
            url: '/l2-expired/:id',
            templateUrl: 'modules/registration/templates/e2-link-expired.html',
            data: {
                pageTitle: 'Registration - Link Expired',
                access: 'public',
                bodyClass: 'my-account'
            }
          })

          .state('register.onboarded', {
            url: '/onboarded/:id',
            templateUrl: 'modules/registration/templates/onboarded.html',
            data: {
                pageTitle: 'Registration - Already Registered',
                access: 'public',
                bodyClass: 'my-account'
            }
          })

    });

})();
