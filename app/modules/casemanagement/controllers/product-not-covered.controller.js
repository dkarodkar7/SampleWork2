(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('ProductNotCoveredCtrl',
        ['$log', '$scope', '$controller','MockDataFactory', '$state', '$stateParams',
            function($log, $scope, $controller,MockDataFactory, $state, $stateParams) {
                var _this = this;
                var issues;
                var issueType;
                var issueDetails;

                MockDataFactory.get({filename: 'account_support'}).$promise.then(function(data){
                    _this.issues = data.issues;
                    _this.issueType = _this.issues[7].issueType;
                    _this.issueDetails = _this.issueType[3].issueDetails;

                    // alert(_this.issueDetails);

                });
                $scope.issuedetails = function() {
                    $state.go('casemanagement.account_success');
                }


            }]);

})();
