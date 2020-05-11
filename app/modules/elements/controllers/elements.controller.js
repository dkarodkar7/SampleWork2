(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('ElementsController', function($log, NavigationResolve) {

    var _this = this;

    _this.leftNav = NavigationResolve[1];

  });

})();
