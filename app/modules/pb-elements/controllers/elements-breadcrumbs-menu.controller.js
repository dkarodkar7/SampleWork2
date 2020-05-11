(function() {

    'use strict';

    angular.module('pb.elements').controller('PbBreadcrumbsMenuController', ['$stateParams', '$rootScope', function($stateParams, $rootScope) {

        var _this = this;

        _this.currentId = null || $stateParams.id;

        $rootScope.$on('$locationChangeSuccess', function(event) {
            _this.currentId = $stateParams.id;
        })
    }]);

})();
