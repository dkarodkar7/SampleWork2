(function() {

  'use strict';

  angular.module('app').directive('pbDsHeader', function($timeout) {
    return {
      restrict: 'A',
      templateUrl: 'modules/main/templates/header.html',
      controller: 'HeaderController as header' //,
    };
  });

})();
