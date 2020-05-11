(function() {

  'use strict';

  angular.module('pb.ds.elements', ['ui.router']);

  //TOASTR CONFIG
  angular.module('pb.ds.elements').config(function(toastrConfig) {
    angular.extend(toastrConfig, {
      // allowHtml: false,
      // autoDismiss: false,
      // closeButton: false,
      closeHtml: '<svg class="close-x" width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" fill="none"><path d="M15.216 1.784l-14.14 14.14M1.076 1.784l14.14 14.14"/></g></svg>'
      // containerId: 'toast-container',
      //extendedTimeOut: 10000,
      // iconClasses: {
      //   error: 'toast-error',
      //   info: 'toast-info',
      //   success: 'toast-success',
      //   warning: 'toast-warning'
      // },
      // maxOpened: 0,
      // messageClass: 'toast-message',
      // newestOnTop: true,
      // onHidden: null,
      // onShown: null,
      // positionClass: 'toast-top-right',
      // preventDuplicates: false,
      // preventOpenDuplicates: false,
      // progressBar: false,
      // tapToDismiss: true,
      // target: 'body',
      // templates: {
      //   toast: 'directives/toast/toast.html',
      //   progressbar: 'directives/progressbar/progressbar.html'
      // },
      // timeOut: 5000,
      // titleClass: 'toast-title',
      // toastClass: 'toast'
    });
  });

})();
