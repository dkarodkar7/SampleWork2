(function() {

  'use strict';

  angular.module('app').directive('pbBootstrapPopover', function() {
    return {
      restrict: 'AE',
      link: function postLink(scope, element) {

        $(element).popover();

      }
    };
  });

})();
