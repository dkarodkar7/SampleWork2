(function() {

  'use strict';

  angular.module('pb.ds.feedback').controller('ToastrController', function($log, toastr) {

    var _this = this;

    _this.toast = {
      danger: function() {
        toastr.error('There was an error with job "98"');
      },
      success:  function() {
        toastr.success('New job "1238" was successfully created.');
      },
      info:  function() {
        toastr.info('A new update is available.');
      },
      warning:  function() {
        toastr.warning('Please review job "1298" before continuing.');
      },
      closeButton:  function() {
        toastr.info('I have a close button', {
          closeButton: true
        });
      },
      progressBar:  function() {
        toastr.info('I have a progress bar.', {
          progressBar: true
        });
      }

    };

  });

})();
