(function() {

  'use strict';

  angular.module('app').directive('pbDatetimepicker', function() {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs, ngModel) {
        element.datetimepicker(scope.ngModel);
      }
    };
  });

})();
