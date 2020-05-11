(function() {

    'use strict';

    angular.module('app').directive('pbValidationMatch', function($parse) {

      //Checks if one input matches another. Useful for confirming passwords, emails, or anything.

        return {
                require: '?ngModel',
                restrict: 'A',
                link: function(scope, elem, attrs, ctrl) {
                    if(!ctrl) {
                        return;
                    }

                    var matchGetter = $parse(attrs.pbValidationMatch);
                    var caselessGetter = $parse(attrs.matchCaseless);
                    var noMatchGetter = $parse(attrs.notMatch);
                    var isRequiredGetter = $parse(attrs.required);

                    scope.$watch(getMatchValue, function(){
                        ctrl.$$parseAndValidate();
                    });

                    ctrl.$validators.match = function(){

                      var match = getMatchValue();
                      var notMatch = noMatchGetter(scope);
                      var value;

                      if(caselessGetter(scope)){
                        value = angular.lowercase(ctrl.$viewValue) === angular.lowercase(match);
                      }else{
                        value = ctrl.$viewValue === match;
                      }
                      /*jslint bitwise: true */
                      value ^= notMatch;
                      /*jslint bitwise: false */
                      return !!value;
                    };

                    function getMatchValue(){
                        var match = matchGetter(scope);
                        if(angular.isObject(match) && match.hasOwnProperty('$viewValue')){
                            match = match.$viewValue;
                        }
                        return match;
                    }
                }
        };
    });

})();
