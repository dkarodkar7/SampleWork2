(function() {

    'use strict';

    angular.module('pb.account').config(function($stateProvider) {
        $stateProvider.state('account', {
            url: '/account',
            templateUrl: 'modules/account/templates/account.html',
            abstract : true
        })

            .state('account.success', {
                url: '/success',
                templateUrl: 'modules/account/templates/success.html',
                data: {
                    pageTitle: 'ThankYou',
                    access: 'public',
                    bodyClass: 'my-account'
                }
            })


        .state('account.login', {
            url: '/login?state',
            templateUrl: 'modules/account/templates/login.html',
            controller: 'LoginCtrl as login',
            data: {
                pageTitle: 'Login',
                access: 'public',
                bodyClass: 'login'
            }, 
            resolve : {
                user : function($stateParams, MockDataFactory) {
                    return MockDataFactory.get({filename: 'registration'});
                }
            }
        })

            .state('account.emailverified', {
                url: '/email-verified',
                templateUrl: 'modules/account/templates/email-verified.html',
                controller: 'LoginCtrl as login',
                data: {
                    pageTitle: 'email-verified',
                    access: 'public',
                    bodyClass: 'login'
                },
                resolve : {
                    user : function($stateParams, MockDataFactory) {
                        return MockDataFactory.get({filename: 'registration'});
                    }
                }
            })

            .state('account.emaillinkexpired', {
                url: '/email-link-expired',
                templateUrl: 'modules/account/templates/email-link-expired.html',
                controller: 'LoginCtrl as login',
                data: {
                    pageTitle: 'email-link-expired',
                    access: 'public',
                    bodyClass: 'login'
                }
            })

            .state('account.registered', {
            url: '/registered?state',
            templateUrl: 'modules/account/templates/login.html',
            controller: 'LoginCtrl as login',
            data: {
                pageTitle: 'Login',
                access: 'public',
                bodyClass: 'login'
            }, 
            resolve : {
              user : function($stateParams, MockDataFactory) {
                    $stateParams.state = 'registered';
                }
            }
        })


        .state('account.logout', {
            url: '/logout?state',
            templateUrl: 'modules/account/templates/login.html',
            controller: 'LoginCtrl as login',
            data: {
                pageTitle: 'Logout',
                access: 'public',
                bodyClass: 'logout'
            }, 
            resolve : {
                user : function($stateParams, MockDataFactory){
                    $stateParams.state = 'logout';
                }
            }
        })

        .state('account.timedout', {
            url: '/timedOut?state',
            templateUrl: 'modules/account/templates/login.html',
            controller: 'LoginCtrl as login',
            data: {
                pageTitle: 'Timed Out',
                access: 'public',
                bodyClass: 'timed-out'
            }, 
            resolve : {
                user : function($stateParams, MockDataFactory){
                    $stateParams.state = 'timedout';
                }
            }
        })

        .state('account.forgotpassword', {
            url: '/forgot-password',
            templateUrl: 'modules/account/templates/forgot-password.html',
            controller: 'ForgotPasswordCtrl as forgotPassword',
            data: {
                pageTitle: 'Forgot Password',
                access: 'public',
                bodyClass: 'forgot-password'
            }
        })

        .state('account.resetpassword', {
            url: '/reset-password/:id',
            templateUrl: 'modules/account/templates/reset-password.html',
            controller: 'ResetPasswordCtrl as resetPassword',
            data: {
                pageTitle: 'Reset Password',
                access: 'public',
                bodyClass: 'reset-password'
            },
            resolve : {
                user : function($stateParams, MockDataFactory) {
                    //get user from server using $stateParams.id
                    return MockDataFactory.get({filename: 'registration'});
                }
            }
        })

        .state('account.profilemanagement', {
            url: '/profile-management',
            templateUrl: 'modules/account/templates/profile-management.html',
            controller: 'ProfileManagementCtrl as profile',
            data: {
                pageTitle: 'Profile Management',
                access: 'public',
                bodyClass: 'profile-management'
            }
        })

        .state('account.profilemanagement.basicinfo', {
            url: '/update-basic-info',
            data: {
                pageTitle: 'Profile Management',
                access: 'public',
                bodyClass: 'profile-management',
                breadCrumbData: [
                    {
                        link        : 'dashboard.page',
                        label       : 'Your Dashboard'
                    },
                    {
                        link        : 'account.profilemanagement.basicinfo',
                        label       : 'Profile Management - Basic Info'
                    }
                ]
            },
            views: {
                "tabContent": {
                    templateUrl: 'modules/account/templates/update-basic-info.html',
                    controller: 'ProfileManagementBasicInfoCtrl as pmBasicInfoCtrl'
                }
            },
            resolve : {
                user : function($stateParams, MockDataFactory)
                {
                    //get user from server using $stateParams.id
                    return MockDataFactory.get({filename: 'user'});
                }
            }
        })

        .state('account.profilemanagement.password', {
            url: '/update-password',
            data: {
                pageTitle: 'Profile Management',
                access: 'public',
                bodyClass: 'profile-management',
                breadCrumbData: [
                    {
                        link        : 'dashboard.page',
                        label       : 'Your Dashboard'
                    },
                    {
                        link        : 'account.profilemanagement.password',
                        label       : 'Profile Management - Password & Security'
                    }
                ]
            },
            views: {
                "tabContent": {
                    templateUrl: 'modules/account/templates/update-password.html',
                    controller: 'ProfileManagementPasswordCtrl as pmPasswordCtrl'
                }
            },
            resolve : {
                user : function($stateParams, MockDataFactory)
                {
                    //get user from server using $stateParams.id
                    return MockDataFactory.get({filename: 'user'});
                }
            }
        })
        .state('account.profilemanagement.dashboard', {
            url: '/update-dashboard-settings',
            data: {
                pageTitle: 'Profile Management',
                access: 'public',
                bodyClass: 'profile-management',
                breadCrumbData: [
                    {
                        link        : 'dashboard.page',
                        label       : 'Your Dashboard'
                    },
                    {
                        link        : 'account.profilemanagement.dashboard',
                        label       : 'Profile Management - Dashboard Settings'
                    }
                ]
            },
            views: {
                "tabContent": {
                    templateUrl: 'modules/account/templates/update-dashboard-settings.html',
                    controller: 'ProfileManagementDashboardCtrl as pmDashboardCtrl'
                }
            },
            resolve : {
                user : function($stateParams, MockDataFactory)
                {
                    //get user from server using $stateParams.id
                    return MockDataFactory.get({filename: 'user'});
                }
            }
        })


    });

})();
