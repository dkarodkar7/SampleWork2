(function() {


    'use strict';

    angular.module('pb.dashboard').controller('NotificationsModalController',  ['$scope', '$uibModalInstance', 'MockDataFactory',
        function($scope, $uibModalInstance, MockDataFactory) {

            var isDisabled = true;
            $scope.inputs= [{}];
            $scope.addRecipitent = false;
            $scope.Recipitent1 = true;
            $scope.Recipitent2 = false;


            $scope.notification = MockDataFactory.query({filename: 'my_products'});


            $scope.close = function() {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.addInput = function(form,index) {
                    if ($scope.inputs.length < 5) {
                        if(form.$valid) {
                            $scope.inputs.push({});
                    }
                }}

            $scope.saveInput = function(form) {
                if(form.$valid) {
                 //   $scope.inputs.push($scope.input);
                    $scope.addRecipitent = false;
                  //       $scope.Recipitent1 = false;
                    //     $scope.Recipitent2 = true;
              //  $scope.Recipitent3 = true;
                    }
                }


            $scope.removeInput = function(index){
               // var newItemNo = $scope.inputs.length;
               // if ( newItemNo !== 0 ) {
                   $scope.inputs.splice(index,1);
                  //  $scope.inputs.pop();
                  //  $scope.Recipitent1 = true;
                  //  $scope.Recipitent2 = true;


                //}
                    }




        }]);

})();
