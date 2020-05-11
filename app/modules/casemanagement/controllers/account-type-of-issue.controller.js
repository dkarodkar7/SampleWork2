(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('AccountIssueTypeCtrl',
        ['$log', '$scope','$rootScope', '$controller','MockDataFactory', '$state', '$stateParams',
            function($log, $scope,$rootScope, $controller,MockDataFactory, $state, $stateParams) {
                var _this = this;
                var issues;
                var issueType;

                MockDataFactory.get({filename: 'account_support'}).$promise.then(function(data){
                    _this.account = data.account;
                    _this.issueType = _this.account[7].issueType;
                   // alert(_this.issueType);

                });
                $scope.issuedetails = function() {
                    $rootScope.technicalissueselecteddetails = false;
                    $state.go('casemanagement.issuedetails');

                }
            }]);

})();
