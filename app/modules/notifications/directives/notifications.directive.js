(function() {
    'use strict';
    angular.module('app').directive('pbNotifications', function() {

        function controller($scope, $element, MockDataFactory) {
            // Initialized for attribute bindings
        }

        function link(scope, element, attrs, controller) {

            // Bindings after template compilations goes here
            //
            controller.dismissNotification = function($event) {
                var _this               = $($event.target);
                var _parentContainer    = _this.parents('.notification');
                var _dismissible        = _this.hasClass('dismissible');
                var _type               = _parentContainer.data('notification-type');

                if ( _dismissible ) {
                    _this.parents('.notification').remove();

                    switch( _type ) {
                        case "notification":
                            // Better to call function and update value in
                            // parent controller rather than update values here
                            // to keep with ControllerAs pattern for namespacing
                            //
                            scope.decrementNotificationsCount();
                            break;
                        case "message":
                            scope.decrementMessagesCount();
                            break;
                        default:
                            break;
                    }
                }
            };
        }

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'modules/notifications/templates/notifications.html',
            controllerAs: 'pbNotificationsCtrl',
            controller: controller,
            scope: true,
            bindToController: {
                notificationListData: '=',
                additionalClasses: '@',
                dismissibleNotifications: '=',
                notificationType: '@'
            },
            link: link
        };
    });

})();