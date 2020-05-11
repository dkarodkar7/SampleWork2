(function() {

    'use strict';

    angular.module('app').filter('pbNotificationsFilter', function($cookies) {
      return function( items) {
         var filtered = [];
         angular.forEach(items, function(item) {
           if(!$cookies.get(item.id))
           {
             filtered.push(item);
           }
         });
         return filtered;
        };
    });
})();
