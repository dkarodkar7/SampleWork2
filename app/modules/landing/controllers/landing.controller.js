(function() {

  'use strict';

  angular.module('pb.ds.landing').controller('LandingController', function($log, NavigationResolve) {

    var _this = this;

    _this.navdata = NavigationResolve;

  });

})();
