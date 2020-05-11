(function() {
    'use strict';

    angular.module('pb.dashboard').config(function($stateProvider) {
        $stateProvider.state('dashboard', {
            //abstract: true,
            cache: false,
            url: '/dashboard?notifications',
            templateUrl: 'modules/dashboard/templates/dashboard.html',
            controller: 'DashboardCtrl as dashboard',
                abstract : true,
            data: {
                pageTitle: 'Dashboard',
                   access: 'public',
                bodyClass: 'dashboard'
            }
        })

        .state('dashboard.page', {
            //url: ''
        })
            .state('my_graphic', {
                url: '/my_graphic',
                templateUrl: 'modules/dashboard/templates/my_graphic.html',
                controller: 'MyGraphicCtrl as mygraphicCtrl',
                data: {
                    pageTitle: 'my-graphic',
                    access: 'public',
                    bodyClass: 'dashboard-graphic'
                }

            })


    });

})();