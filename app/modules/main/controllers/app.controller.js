(function() {

  'use strict';

  angular.module('app').controller('AppController', function($rootScope, $state) {

    var _this = this;
    $rootScope.$state = $state;

    _this.header = 'fixed';
    _this.footer = true;

    _this.rtl = 'ltr';

  });

  angular.module('app').filter('startFrom', function() {
    return function(input, start) {
      if(input) {
        start = +start; //parse to int
        return input.slice(start);
      }
      return [];
    }
  });

  angular.module('app').filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    };
  });

})();
