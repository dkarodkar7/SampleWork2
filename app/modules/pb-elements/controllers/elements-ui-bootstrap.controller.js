(function() {

  'use strict';

  angular.module('pb.elements').controller('PbUiBootstrapController', function($log, $uibModal, $timeout, $window) {

    var _this = this;

    _this.modals = {
      simple: function() {
        $uibModal.open({
          templateUrl: 'modules/components/modals/elements-simple.html',
          controller: 'BootstrapUiSimpleModalController'
        });
      },
      modal: function() {
        $uibModal.open({
          templateUrl: 'modules/elements/modals/elements-modal.html',
          controller: 'BootstrapUiModalController',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function() {
        $uibModal.open({
          templateUrl: 'modules/elements/modals/elements-prompt.html',
          controller: 'BootstrapUiPromptModalController',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function(fullname) {
          _this.fullname = fullname;
        });
      },
      draggable: function() {
        $uibModal.open({
          windowTemplateUrl: 'modules/elements/modals/elements-draggable-template.html',
          templateUrl: 'modules/elements/modals/elements-draggable.html',
          controller: 'BootstrapUiDraggableModalController',
          keyboard: false,
          backdrop: 'static'
        });
      }
    };

    _this.calendar = {
      format: 'MMMM dd, yyyy',
      options: {
        formatYear: 'yyyy',
        startingDay: 1,
        showWeeks: false,
        showButtonBar: false
      },
      open: function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _this.calendar.opened = true;
      }
    };

    _this.time = {
      menuClick: function(event) {
        event.preventDefault();
      }
    };

    _this.tabs = {
      tabset01: [{
        title: 'Dynamic Title 1',
        content: 'Dynamic content 1'
      }, {
        title: 'Dynamic Title 2',
        content: 'Dynamic content 2',
        disabled: true
      }],
      tabset02: [{
        title: 'Dynamic Title X',
        content: 'Dynamic content X'
      }, {
        title: 'Dynamic Title Y',
        content: 'Dynamic content Y',
        disabled: true
      }],
      tabset03: [{
        title: 'Dynamic Title A',
        content: 'Dynamic content A'
      }, {
        title: 'Dynamic Title B',
        content: 'Dynamic content B',
        disabled: true
      }],
      alert: function(event) {
        $timeout(function() {
          $window.alert('You\'ve selected the alert tab!');
        });
      }
    };

  });

})();
