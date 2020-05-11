(function() {

  'use strict';

  angular.module('pb.login').controller('LoginCtrl', function($log, NavigationResolve) {

    var _this = this;

    _this.navdata = NavigationResolve;

  });

})();
