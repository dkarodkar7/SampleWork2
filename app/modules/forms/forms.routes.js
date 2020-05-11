(function() {

  'use strict';

  angular.module('pb.ds.forms').config(function($stateProvider) {
    $stateProvider.state('forms', {
      abstract: true,
      templateUrl: 'modules/forms/templates/forms.html',
      controller: 'FormsController as forms',
      data: {
        pageTitle: 'Forms',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.basic', {
      url: '/forms/basic',
      templateUrl: 'modules/forms/templates/forms-basic.html',
      controller: 'FormsController as forms',
      data: {
        pageTitle: 'Forms',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.addressbook', {
      url: '/forms/addressbook',
      templateUrl: 'modules/forms/templates/forms-address-book.html',
      controller: 'AddressBookController as addressbook',
      data: {
        pageTitle: 'Address Book',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.addressblocks', {
      url: '/forms/addressblocks',
      templateUrl: 'modules/forms/templates/forms-address-blocks.html',
      controller: 'AddressBlocksController as addressblocks',
      data: {
        pageTitle: 'Address Blocks',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.wizard', {
      templateUrl: 'modules/forms/templates/forms-wizard.html',
      controller: 'WizardController as wizard',
      data: {
        pageTitle: 'Wizard',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.addanother', {
      templateUrl: 'modules/forms/templates/forms-add-another.html',
      controller: 'AddAnotherController as addanother',
      data: {
        pageTitle: 'Add another',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.approval', {
      templateUrl: 'modules/forms/templates/forms-approval.html',
      controller: 'ApprovalController as approval',
      data: {
        pageTitle: 'Approval',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.validation', {
      templateUrl: 'modules/forms/templates/forms-validation.html',
      controller: 'ValidationController as val',
      data: {
        pageTitle: 'Validation',
        access: 'public',
        bodyClass: 'forms'
      }
    })
    .state('forms.inlinehelp', {
      templateUrl: 'modules/forms/templates/forms-inlne-help.html',
      controller: 'HelpController as help',
      data: {
        pageTitle: 'Help',
        access: 'public',
        bodyClass: 'forms help'
      }
    });



  });

})();
