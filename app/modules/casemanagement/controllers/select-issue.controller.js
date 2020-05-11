(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('SelectIssueCtrl',
        ['$log', '$scope','$rootScope','MockDataFactory', '$state', '$stateParams',
            function($log, $scope,$rootScope, MockDataFactory, $state,  $stateParams) {
                var _this = this;
                var account;

                MockDataFactory.get({filename: 'account_support'}).$promise.then(function(data){
                    _this.account = data.account;
                    _this.technical = data.technical;
                    _this.accountissues = _this.account[7]
                    _this.technicalissues = _this.technical[4]


                    $scope.init = function appendText() {
                        //$stateChangeSuccess();
                        var myEl = angular.element(document.querySelector('.tags ul.filter-tabs li.tag--main.secondary'));
                        $(".tags ul.filter-tabs li.tag--main.secondary:first span").removeClass("placeholder");
                        if ($rootScope.technicalissueselecteddetails != true) {
                          //  alert(lastStateName);
                            myEl.append('<a class="appended-breadcrumb" href="">Account Support</a>');
                        }
                        else
                            myEl.append('<a class="appended-breadcrumb" href="">Technical Support</a>');

                    }
                    $scope.init();

                });

                $scope.accounttypeofissue = function() {
                    $state.go('casemanagement.accounttypeofissue');
                }
                $scope.technicalissuedetails = function() {
                    $rootScope.technicalissueselecteddetails = true;
                    $state.go('casemanagement.issuedetails');
                }



            }]);

})();
