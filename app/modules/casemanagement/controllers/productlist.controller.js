(function() {
    'use strict';
    angular.module('pb.account').controller('ProductListCtrl', ['$log', '$scope','$rootScope', 'MockDataFactory','$state',
        function($log, $scope,$rootScope, MockDataFactory,$state) {

            var _this = this;
            var whatDevice = $scope.nowDevice;
            $scope.myInterval = 7000;

            MockDataFactory.get({filename: 'case_management_products'}).$promise.then(function(data) {
                $scope.slides = data.slides;

                $scope.displayMode = 'mobile'; // default value


                $scope.$watch('displayMode', function (value) {

                    switch (value) {
                        case 'mobile':
                            // do stuff for mobile mode
                            console.log(value);
                            break;
                        case 'tablet':
                            // do stuff for tablet mode
                            console.log(value);
                            break;
                    }
                });


                var i, first = [],
                    second, third;
                var many = 1;

                //##################################################
                //Need to be changed to update the carousel since the resolution changed
                $scope.displayMode = "tablet";
                //##################################################
                if ($scope.displayMode == "mobile") {
                    many = 1;
                }
                /*else if ($scope.displayMode == "tablet") {
                    many = 5;
                }*/
                else {
                    many = 8;
                }

                for (i = 0; i < $scope.slides.length; i += many) {
                    second = {
                        image1: $scope.slides[i]
                    };
                    if (many == 1) {
                    }
                    if ($scope.slides[i + 1] && (many == 8)) {
                        second.image2 = $scope.slides[i + 1];
                        second.image3 = $scope.slides[i + 2];
                        second.image4 = $scope.slides[i + 3];
                        second.image5 = $scope.slides[i + 4];
                        second.image6 = $scope.slides[i + 5];
                        second.image7 = $scope.slides[i + 6];
                        second.image8 = $scope.slides[i + 7];
                    }
                  /*  if ($scope.slides[i + (many - 1)] && many == 3) {
                        second.image3 = $scope.slides[i + 2];
                    }*/
                    first.push(second);
                }
                $scope.groupedSlides = first;

               })


            $scope.tecnicalselectissue = function() {

                // alert(elem.inheritedData('$uiView').state);
                $rootScope.accountselectionissue = true;
                $state.go('casemanagement.selectissue');

         }

       }]);


})();
