(function() {

    'use strict';

    angular.module('app').directive('pbEspot', function($timeout) {

        // linking to factory in parent controller
        //function controller($scope, $element, MockDataFactory) {
        //    $scope.pbEspot = MockDataFactory.query({filename: 'espot'});
        //}

        return {
            restrict: 'AE',
            templateUrl: 'modules/espot/templates/espot.html',
            scope: {
                espotData: '='
                //,
                //additionalClasses: '@' // debating if theme should be passed in on directive element or json object
            },
            link: function postLink(scope, element, attrs ) {

                $timeout(function() {
                for (var i = 0; i < element[0].children.length; i++) {
                    scope = element[0].children[i];
                    if($(scope).hasClass('tall')){ setDoubleHeight($(scope)) };
                    checkBackgroundAttribute(scope);
                }
                }, 500);

                function checkBackgroundAttribute(element) {
                    var bgAttr = $(element).attr('data-bg-image');

                    if (bgAttr) {
                        assignBackgroundImage($(element).children(), bgAttr);
                    }
                }

                function setDoubleHeight(element) {
                    var doubleHeight = "";

                    doubleHeight = element.next('.prod').height() * 2;

                    element.children().css({
                        'min-height'        : doubleHeight
                    });
                }

                function assignBackgroundImage($elem, image) {
                    $elem.css({
                        'background-image'  : 'url("'+ image +'")'
                    });
                }

            }
        };
    });

})();