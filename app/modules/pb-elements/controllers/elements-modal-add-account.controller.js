(function() {


    'use strict';

    angular.module('pb.elements').controller('BootstrapUiAddAccountModalController',  ['$scope','$state', '$uibModalInstance','MockDataFactory', 'data',
        function($scope,$state, $uibModalInstance, MockDataFactory, data) {
            var _this = this;
            $scope.model = data;
            $scope.questions = MockDataFactory.query({filename: 'registration_questions'});
            $scope.confirm = false;
            $scope.modals=[];


            $scope.$on = function($state) {
            if ($scope.$state.$current == 'account.profilemanagement.dashboard') {
            $scope.modals = [{
            title: 'Add Account Number',
            content: 'Enter the account number you want to add'
            }]}
            else {
            $scope.modals = [{
            title: 'Add Products',
            content: 'Start by entering the account number associated with your products. You may find this number on a statement or invoice.'
            }]}
            }

            $scope.close = function() {
                $scope.modalForm1.$setPristine();
                $scope.modalForm1.questionField.$setUntouched();
                $scope.modalForm1.questionField.$setPristine();
                //$scope.model.answer = '';
                //$scope.model.errorText = '';
                $uibModalInstance.dismiss('cancel');
            };

            $scope.save = function(model, form) {
                if(form.$valid) {
                    //validate answer on server
                    if(model.answer == model.question.answer) {
                        //answer is correct
                        $uibModalInstance.close(model);
                    }
                    else {
                        model.errorText = model.question.error;
                    }
                }
            };
            
            $scope.next = {

                selectaddress: function selectaddress(form) {
                    if (form.$valid) {
                        // $scope.confirm.selectaddress = true;
                        //$scope.confirm.confrminformation = false;

                        $scope.modals[1] = true;
                        $scope.confirm=true;
                    }
                },
                confrminformation: function confrminformation(form) {
                    if (form.$valid) {
                        //$scope.confirm.selectaddress = false;
                        //$scope.confirm.confrminformation = true;
                        $scope.modals[1] = false;
                        $scope.confirm=true;
                    }
                }
            };

                        $scope.chat = function() {
                //add chat functionality here
                $uibModalInstance.dismiss('cancel');
            };

           }]);

})();

