(function() {

  'use strict';

  angular.module('app').directive('pbButtonProgress', function() {
      return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
          ngModel: '='
        },
        link: function postLink(scope, element, attrs, ngModel) {

          //store the element text
          scope.ngModel.defaultText = element.text();

          //set the default fa-icon
          var icon = (scope.ngModel.iconClass) ? scope.ngModel.iconClass : scope.ngModel.iconClass = 'fa-circle-o-notch';

          //set the default speed
          var speed = (scope.ngModel.speed) ? scope.ngModel.speed : scope.ngModel.speed = 1.5;

          scope.$watch('ngModel.isLoading', function(newVal, oldVal) {
            //console.log(newVal, oldVal);
            if (newVal) {
              element.addClass('loading');
              element.text(scope.ngModel.text);
              element.prepend('<i class="fa ' + icon + ' fa-spin"></i>&nbsp;&nbsp;');
              element.find('i.fa').css({
                '-webkit-animation': 'fa-spin ' + speed + 's infinite linear',
                animation: 'fa-spin ' + speed + 's infinite linear'
              });
              element.prop('disabled', true);
            } else {
              element.removeClass('loading');
              element.text(scope.ngModel.defaultText);
              element.prop('disabled', false);
            }
          });
        }
      };
    });

})();
