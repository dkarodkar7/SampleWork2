(function() {

  'use strict';

  angular.module('pb.registration').controller('RegisterConfirmInformationModalController',  ['$scope', '$uibModalInstance', 'MockDataFactory', 'data',
  function($scope, $uibModalInstance, MockDataFactory, data) {

    $scope.model = data;
    $scope.confirm = false;
   //Grab data for registration question
    $scope.questions = MockDataFactory.query({filename: 'registration_questions'});

    $scope.close = function() {
      $scope.modalForm1.$setPristine();
      $scope.modalForm1.questionField.$setUntouched();
      $scope.modalForm1.questionField.$setPristine();
      $scope.model.answer = '';
      $scope.model.errorText = '';
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
         $scope.confirm=false;
        }
      },
      confrminformation: function confrminformation(form) {
        if (form.$valid) {
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
