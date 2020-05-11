(function() {

  'use strict';

  angular.module('app').directive('pbPanelDraggable', function() {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs, ngModel) {
        element.find('.column').sortable(scope.ngModel).disableSelection();
      }
    };
  });

})();
