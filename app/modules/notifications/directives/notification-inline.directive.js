(function() {

    'use strict';

    angular.module('app').directive('pbNotificationInline', function($cookies) {

        /*function link(scope, element, attrs) {
            element.on('click', '.icon-close-circle', function(){
                element.fadeOut();
            });
        }*/

        return {
            restrict: 'A',
            templateUrl: 'modules/notifications/templates/notification_inline.html',
            //todo fadeOut on close using css animations
            controller: function($scope, $cookies) {

              $scope.close = function(){
                $scope.notificationData = [];
              }

              $scope.closeNotification = function(notification, idx)
              {
                if(notification.id != null)
                {
                  $cookies.put(notification.id , true);
                  //call back server to clear this notification from the user account?
                }
                $scope.notificationData.splice(idx, 1);
              }
            },
            scope: {
                notificationData: '='
            }
        };

    });


})();
