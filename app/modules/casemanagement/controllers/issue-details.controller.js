(function() {
    'use strict';
    angular.module('pb.casemanagement').controller('IssueDetailsCtrl',
        ['$log', '$scope', '$controller','$uibModal','MockDataFactory','Upload', '$timeout', '$state', '$stateParams',
            function($log, $scope, $controller,$uibModal, MockDataFactory, Upload, $timeout, $state, $stateParams) {
                var _this = this;
                var account;
                var accountissueType;
                var accountissueDetails;
                var technical;
                var technicalissueDetails;

                MockDataFactory.get({filename: 'account_support'}).$promise.then(function(data){
                    _this.account = data.account;
                    _this.accountissueType = _this.account[7].issueType;
                    _this.accountissueDetails = _this.accountissueType[3].issueDetails;
                    _this.technical = data.technical;
                    _this.technicalissueDetails = _this.technical[4].issueDetails;
                    // alert(_this.technical);
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


                $scope.schedulerModal = function () {
                    $uibModal.open({
                        size: 'md',
                        templateUrl: 'modules/casemanagement/templates/modals/scheduler-modal.html',
                        controller: 'schedulerModalController',
                        resolve: {

                        }
                    })

                };


                $scope.issuedetails = function() {
                    $scope.schedulerModal();
                    $state.go('casemanagement.account_success');
                }


            }]);

})();
