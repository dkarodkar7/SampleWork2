(function() {

    'use strict';

    angular.module('pb.login').config(function($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'modules/login/templates/login.html',
            controller: 'LoginCtrl as login',
            resolve: {
                NavigationResolve: function($log, MockDataFactory) {
                    return MockDataFactory.query({filename: 'navigation'});
                }
            },
            data: {
                pageTitle: 'Login',
                access: 'public',
                bodyClass: 'login'
            }
        })

        .state('login.page', {
            url: '',
            templateUrl: 'modules/login/templates/login.html'
        });
    });

})();