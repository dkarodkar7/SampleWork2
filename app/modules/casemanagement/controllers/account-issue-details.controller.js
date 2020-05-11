(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('AccountIssueDetailsCtrl',
        ['$log', '$scope', '$controller','MockDataFactory','Upload', '$timeout', '$state', '$stateParams',
            function($log, $scope, $controller,MockDataFactory, Upload, $timeout, $state, $stateParams) {
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


                $scope.uploadFiles = function(file, errFiles) {
                    $scope.f = file;
                    $scope.errFile = errFiles && errFiles[0];
                    if (file) {
                        file.upload = Upload.upload({
                            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                            data: {file: file}
                        });

                        file.upload.then(function (response) {
                            $timeout(function () {
                                file.result = response.data;
                            });
                        }, function (response) {
                            if (response.status > 0)
                                $scope.errorMsg = response.status + ': ' + response.data;
                        }, function (evt) {
                            file.progress = Math.min(100, parseInt(100.0 *
                                evt.loaded / evt.total));
                        });
                    }
                }

                $scope.issuedetails = function() {
                    $state.go('casemanagement.account_success');
                     }


            }]);

})();
