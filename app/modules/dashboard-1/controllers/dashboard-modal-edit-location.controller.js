(function() {


  'use strict';

  angular.module('pb.dashboard').controller('EditLocationModalController',  ['$scope', '$uibModalInstance', 'MockDataFactory', 'address', 'moment',
  function($scope, $uibModalInstance, MockDataFactory, address, moment) {

    var isDisabled = true;
    $scope.model = angular.copy(address);
    $scope.confirm = false;
    $scope.model.updateAllProducts = true;
    $scope.model.updateBillingAddress = true;

    $scope.states = MockDataFactory.query({filename: 'states'});

    $scope.close = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.next = function(form) {
      if(form.$valid) {
       $scope.confirm = true;
      }
    };

    $scope.save = function() {
        //TODO post $scope.model to server before closing modal
        $uibModalInstance.close($scope.model);
    };

    $scope.daterangepicker = {
      date: {
        startDate: moment()
      },
      options: {
        singleDatePicker:true,
        drops:'up',
        locale: {
          format: 'MM/DD/YYYY'
        },
        minDate: moment(),
        autoApply: true,
        eventHandlers: {
          'apply.daterangepicker': function (startDate, endDate) {
          }
        }
      }
    };

      //$(".datePicker").datepicker({
      //    showOn: 'button',
      //    onClose: function(dateText, inst)
      //    {
      //        $(this).attr("disabled", false);
      //    },
      //    beforeShow: function(input, inst)
      //    {
      //        $(this).attr("disabled", true);
      //    }
      //});

  }]);

})();
