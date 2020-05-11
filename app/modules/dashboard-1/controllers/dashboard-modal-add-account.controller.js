(function() {


    'use strict';

    angular.module('pb.dashboard').controller('AddProductAccountModalController',  ['$scope', '$uibModalInstance', 'MockDataFactory',
        function($scope, $uibModalInstance, MockDataFactory) {

          //  $scope.model = angular.copy(address);
            $scope.confirm = false;
            $scope.questions = MockDataFactory.query({filename: 'registration_questions'});

            $scope.close = function() {
                $scope.modalForm1.$setPristine();
                $scope.modalForm1.questionField.$setUntouched();
                $scope.modalForm1.questionField.$setPristine();
               // $scope.model.answer = '';
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

                confirmInformation: function confirmInformation(form) {
                    if (form.$valid) {
                        $scope.confirm=true;

                        //  $scope.confirm = false;
                    }
                }
            };

            $scope.chat = function() {
                //add chat functionality here
                $uibModalInstance.dismiss('cancel');
            };


        }]);

})();
