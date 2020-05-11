(function() {

  'use strict';

  angular.module('app').directive('pbTransitoryAlert', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      template: '<span ng-transclude></span><span class="btn-response" style="display: none; " ng-class="ngModel.messageClass" ng-bind-html="ngModel.message" ></span>',
      transclude: true,
      link: function postLink(scope, element, attrs) {

        var fadeIn = scope.ngModel.fadeIn || 500,
          fadeOut = scope.ngModel.fadeOut || 1000,
          delay = scope.ngModel.delay || 2000;

        var $message = element.find('span.btn-response');

        element.on({
          click: function() {
            if ($message.is(':visible')) {
              return false;
            } else {
              $message.fadeIn(fadeIn).delay(delay).fadeOut(fadeOut);
            }
          }
        });

      }
    };
  });

})();
