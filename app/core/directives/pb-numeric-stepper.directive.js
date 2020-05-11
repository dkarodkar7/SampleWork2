(function() {

  'use strict';

  angular.module('app').directive('pbNumericStepper', function() {
    return {
      restrict: 'EA',
      scope: {
        options: '='
      },
      link: function postLink(scope, element, attrs) {
        element.stepper(scope.options);
      }
    };
  });

})();
