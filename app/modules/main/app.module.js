(function () {

    'use strict';

    angular.module('app', [

    //third party modules are in /core/core.module.js
    'pb.core',
    'pb.ds.home',
    'pb.ds.elements',
    'pb.ds.forms',
    'pb.ds.foundation',
    'pb.ds.globalization',
    'pb.ds.graphs',
    'pb.ds.helpers',
    'pb.ds.mobile',
    'pb.ds.landing',
    'pb.ds.feedback',
    'pb.ds.patterns',
    'pb.ds.principles',
    'pb.ds.resources',
    'pb.ds.tables',
    'pb.ds.writing',
    'pb.settings',
    'pb.ds.splitview',
    'pb.elements',
    'pb.dashboard',
    'pb.orderhistory',
    'pb.financial',
    'pb.registration',
    'pb.account',
        'pb.casemanagement',

    ]);

    //angular scroll configuration
    angular.module('app').value('duScrollDuration', 750);
    angular.module('app').value('duScrollOffset', 125);

    //configure debugging
    angular.module('app').config(function ($logProvider, config) {
        $logProvider.debugEnabled(config.debug);
    });

    //configure production mode
    angular.module('app').config(function ($compileProvider, config) {
        $compileProvider.debugInfoEnabled(config.debug);
    });

    //ui-bootstrap tooltip
    angular.module('app').config(function ($uibTooltipProvider) {
        $uibTooltipProvider.options({
            appendToBody: true
        });
    });

    // UI ROUTER CONFIG
    angular.module('app').config(function ($stateProvider) {
        $stateProvider.state('weblanding', {
            url: '/web',
            templateUrl: 'modules/main/templates/web.html',
            controller: 'SectionLandingController as SLC',
            resolve: {
                NavigationResolve: function ($log, MockDataFactory) {
                    return MockDataFactory.query({filename: 'navigation'});
                }
            },
            data: {
                pageTitle: 'Web',
                access: 'public',
                bodyClass: 'web sectionlanding'
            }
        })
            .state('mobilelanding', {
                url: '/mobile',
                templateUrl: 'modules/main/templates/mobile.html',
                controller: 'SectionLandingController as SLC',
                resolve: {
                    NavigationResolve: function ($log, MockDataFactory) {
                        return MockDataFactory.query({filename: 'navigation'});
                    }
                },
                data: {
                    pageTitle: 'Mobile',
                    access: 'public',
                    bodyClass: 'mobile sectionlanding'
                }
            })
            .state('otherwise', {
                url: '*path',
                template: '',
                controller: function ($state) {
                    $state.go('home');
                }
            });
    });

    // highlight.js configuration
    angular.module('app').config(function (hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            languages: ['html', 'css', 'js', 'xml', 'json']
        });
    });


    // TRANSLATE CONFIG
    angular.module('app').config(function ($translateProvider, $translatePartialLoaderProvider) {

        $translateProvider.useLoaderCache(true);

        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/{lang}.json'
        });

        //additional parts loaded in module controllers
        //$translatePartialLoaderProvider.addPart('modules/i18n');

        $translateProvider.preferredLanguage('en-us');
        $translateProvider.fallbackLanguage('en-us');
        $translateProvider.useLocalStorage();

        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    });

    // DYNAMIC LOCALE CONFIG
    angular.module('app').config(function (tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

        //gulp copies the i18n locale files from bower_components to modules/i18n
        tmhDynamicLocaleProvider.localeLocationPattern('modules/i18n/angular-i18n/angular-locale_{{locale}}.js');

    });


    angular.module('app').run(function ($rootScope, $state, $stateParams, $log, $translate, $anchorScroll, $location, $window) {


        //refresh as parts are added in controllers
        $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
            $translate.refresh();
        });


        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $log.debug(
                'To State:', toState,
                'From state:', fromState
            );

            $anchorScroll();

            if (!toState || !toState.data) {
                return;
            }

        });


        $rootScope.$on('$stateChangeError', function (event, toState, tpParams, fromState, fromParams, error) {
            $log.debug('$stateChangeError: ', error);
        });

        $rootScope.$on('$stateNotFound', function (unfoundState) {
            $log.debug('$stateNotFound: ', unfoundState);
        });

        $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
            //if ($location.hash()) {$anchorScroll();}
            $anchorScroll();
        });

        $rootScope.$on('$routeChangeStart', function (newRoute, oldRoute) {
            //if ($location.hash()) {$anchorScroll();}
            //$anchorScroll();
        });

        //scroll to top of the page, this makes the transitions wonky and needs more research
        $rootScope.$on('$stateChangeSuccess', function () {
            //document.body.scrollTop = document.documentElement.scrollTop = 0;
        });


        // hack to scroll to top when navigating to new URLS but not back/forward
        // var wrap = function(method) {
        //   var orig = $window.window.history[method];
        //   $window.window.history[method] = function() {
        //     var retval = orig.apply(this, Array.prototype.slice.call(arguments));
        //     $anchorScroll();
        //     return retval;
        //   };
        // };
        // wrap('pushState');
        // wrap('replaceState');

    });


})();
