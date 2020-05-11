(function() {

  'use strict';

  angular.module('pb.dashboard')
    .controller('OnboardingModalController',  ['$scope', '$uibModalInstance', 'MockDataFactory', 'user',
    function($scope, $uibModalInstance, MockDataFactory, user) {

      var _this = this;
      
      _this.user = user;
      //checking to see if this is mobile and not showing tour
      if(window.innerWidth < 768){
        _this.hasSeenTour = true;
        _this.hasSeenLastSlide = true;
      } else {
        _this.hasSeenTour = user.hasSeenTour;
        _this.hasSeenLastSlide = false;
      }
      _this.hasMultipleProducts = user.hasMultipleProducts;

      $scope.close = function() {
        //check to see if the person has multiple products to show last slide
        if(_this.hasMultipleProducts && !_this.hasSeenLastSlide){
          _this.hasSeenTour = true;
          _this.hasMultipleProducts = true;
          _this.hasSeenLastSlide = true;
        } else {
          $uibModalInstance.dismiss('cancel');
        }
      };

    }]);

})();
