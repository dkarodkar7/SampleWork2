(function() {

    'use strict';

    angular.module('app').directive('pbRelatedLinks', function() {

        return {
            restrict: 'AE',
            templateUrl: 'modules/related-links/templates/related-links.html',
            scope: {
                pbRelatedTwocols: '='
            }
        };
    });

})();