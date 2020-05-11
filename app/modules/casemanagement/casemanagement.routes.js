(function() {

    'use strict';

    angular.module('pb.casemanagement').config(function($stateProvider) {
        $stateProvider.state('casemanagement', {
            url: '/casemanagement',
            templateUrl: 'modules/casemanagement/templates/casemanagement.html',
            abstract : true
        })
            .state('casemanagement.createcase', {
                url: '/create-case',
                templateUrl: 'modules/casemanagement/templates/create-case.html',
                controller: 'CreateCaseCtrl as createcaseCtrl',

                data: {
                    pageTitle: 'create case',
                    access: 'public',
                    bodyClass: 'create-case',
                    breadCrumbData: [
                        {
                            link: 'createcase',
                            label: 'Create a Case'
                        },
                        {
                            link: 'accountselect',
                            label: 'Case Type'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Type of Issue'
                        },
                        {
                            link: 'issuedetails',
                            label: 'Details'
                        }
                    ]

                }                   })

                // Full Flow - Standard

            .state('casemanagement.technicalsupport', {
                url: '/technical-support',
                templateUrl: 'modules/casemanagement/templates/technical-support.html',
                controller: 'TechnicalSupportCtrl as technicalsupportCtrl',

                data: {
                    pageTitle: 'technical support',
                    access: 'public',
                    bodyClass: 'technical-support',
                    breadCrumbData: [
                        {
                            link: 'createcase',
                            label: 'Create a Case'
                        },
                        {
                            link: 'casetype',
                            label: 'Case Type'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Product'
                        },
                        {
                            link: 'issuedetails',
                            label: 'Issue'
                        }
                    ]

                }                   })

            .state('casemanagement.productnotcovered', {
                url: '/technical-product-not-covered',
                templateUrl: 'modules/casemanagement/templates/technical-product-not-covered.html',
               // controller: 'ProductNotCoveredCtrl as productnotcoveredCtrl',

                data: {
                    pageTitle: 'technical support',
                    access: 'public',
                    bodyClass: 'product-not-covered',
                    breadCrumbData:  [
                        {
                            link: 'createcase',
                            label: 'Create a Case'
                        },
                        {
                            link: 'casetype',
                            label: 'Case Type'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Product'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Service Contract'
                        },
                        {
                            link: 'issuedetails',
                            label: 'Issue'
                        }
                    ]

                }                   })


             .state('casemanagement.productlist', {
                url: '/product-list',
                templateUrl: 'modules/casemanagement/templates/product-list.html',
                controller: 'ProductListCtrl as productlistCtrl',

                data: {
                    pageTitle: 'Product Select',
                    access: 'public',
                    bodyClass: 'technical-support',
                    breadCrumbData: [
                        {
                            link: 'createcase',
                            label: 'Create a Case'
                        },
                        {
                            link: 'casetype',
                            label: 'Case Type'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Product'
                        },
                        {
                            link: 'issuedetails',
                            label: 'Issue'
                        }
                    ]
                }                   })





            // Full Flow - Account

            .state('casemanagement.selectissue', {
                url: '/select-issue',
                templateUrl: 'modules/casemanagement/templates/select-issue.html',
                controller: 'SelectIssueCtrl as selectissueCtrl',
                data: {
                    pageTitle: 'account support',
                    access: 'public',
                    bodyClass: 'account-support',
                    breadCrumbData: [
                        {
                            link: 'createcase',
                            label: 'Create a Case'
                        },
                        {
                            link: 'casetype',
                            label: 'Case Type'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Product'
                        },
                        {
                            link: 'issuedetails',
                            label: 'Issue'
                        }
                    ]
                  }

            })
            .state('casemanagement.accounttypeofissue', {
                url: '/account-type-of-issue',
                templateUrl: 'modules/casemanagement/templates/account_type_of_issue.html',
                controller: 'AccountIssueTypeCtrl as accountissuetypeCtrl',
                data: {
                    pageTitle: 'Type of Issue',
                    access: 'public',
                    bodyClass: 'account-support',
                    breadCrumbData:  [
                        {
                            link: 'createcase',
                            label: 'Create a Case'
                        },
                        {
                            link: 'casetype',
                            label: 'Case Type'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Product'
                        },
                        {
                            link: 'issuedetails',
                            label: 'Issue'
                        }
                    ]
                }

            })

            .state('casemanagement.issuedetails', {
                url: '/issue-details',
                templateUrl: 'modules/casemanagement/templates/issue-details.html',
                controller: 'IssueDetailsCtrl as issuedetailCtrl',
                data: {
                    pageTitle: 'Account Issue Details',
                    access: 'public',
                    bodyClass: 'account-issue-details',
                    breadCrumbData: [
                        {
                            link: 'createcase',
                            label: 'Create a Case'
                        },
                        {
                            link: 'casetype',
                            label: 'Case Type'
                        },
                        {
                            link: 'accounttypeofissue',
                            label: 'Product'
                        },
                        {
                            link: 'issuedetails',
                            label: 'Issue'
                        }
                    ]
                }

            })

            .state('casemanagement.account_success', {
                url: '/account_success',
                templateUrl: 'modules/casemanagement/templates/account_success.html',
                controller: 'IssueDetailsCtrl as issuedetailCtrl',

                data: {
                    pageTitle: 'Account success',
                    access: 'public',
                    bodyClass: 'account-success',
                   }

            })

    });

})();
