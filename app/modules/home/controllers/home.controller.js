(function() {

  'use strict';

  angular.module('pb.ds.home').controller('HomeController', function($log, NavigationResolve) {

    var _this = this;

    _this.navdata = NavigationResolve;

  });

})();
