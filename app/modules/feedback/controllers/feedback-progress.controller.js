(function() {

  'use strict';

  angular.module('pb.ds.feedback').controller('ProgressController', function($log, $timeout, cfpLoadingBar) {

    var _this = this;

    //TODO: range slider, maybe use these instead:
    //https://github.com/seiyria/angular-bootstrap-slider
    //https://github.com/seiyria/bootstrap-slider

    _this.startProgress = function() {
      cfpLoadingBar.start();
      $timeout(function() {
        cfpLoadingBar.complete();
      }, 4000);
    };

    _this.buttonLoading = {
      isLoading: false,
      text: 'Saving',
      load: function() {
        _this.buttonLoading.isLoading = true;
        $timeout(function() {
          _this.buttonLoading.isLoading = false;
        }, 2000);
      }
    };

    _this.buttonLoading2 = {
      isLoading: false,
      text: 'Updating',
      speed: 0.75,
      iconClass: 'fa-refresh',
      load: function() {
        _this.buttonLoading2.isLoading = true;
        $timeout(function() {
          _this.buttonLoading2.isLoading = false;
        }, 3000);
      }
    };

  });

})();
