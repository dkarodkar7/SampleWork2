(function() {
    'use strict';
    angular.module('pb.account').controller('onBoardingCtrl', ['$log', '$scope', 'MockDataFactory',
    function($log, $scope, MockDataFactory) {
    	
    	var _this = this;

    	MockDataFactory.get({filename: 'onboarding'}).$promise.then(function(data){
    		_this.slides = data.slides;
    	});

  }]);

})();
