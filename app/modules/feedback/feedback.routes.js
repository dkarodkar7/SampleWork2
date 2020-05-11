(function() {

  'use strict';

  angular.module('pb.ds.feedback').config(function($stateProvider) {
    $stateProvider.state('feedback', {
      abstract: true,
      url: '/feedback',
      templateUrl: 'modules/feedback/templates/feedback.html',
      controller: 'FeedbackController as feedback',
      data: {
        pageTitle: 'feedback',
        access: 'public',
        bodyClass: 'feedback'
      }
    })

    .state('feedback.page', {
      url: '',
      views: {
        alerts: {
          templateUrl: 'modules/feedback/templates/feedback-alerts.html',
          controller: 'AlertsController as alerts'
        },
        badges: {
          templateUrl: 'modules/feedback/templates/feedback-badges.html',
          controller: 'BadgesController as badges'
        },
        toastrs: {
          templateUrl: 'modules/feedback/templates/feedback-toastr.html',
          controller: 'ToastrController as toastr'
        },
        progressbars: {
          templateUrl: 'modules/feedback/templates/feedback-progress.html',
          controller: 'ProgressController as progress'
        }
      }
    })


    .state('feedback.loadingbar', {
      url: '/loadingbar',
      templateUrl: 'modules/feedback/templates/feedback-loadingbar.html',
      controller: 'LoadingBarController as loadingbar'
    })


    .state('feedback.headermessage', {
      url: '/headermessage',
      templateUrl: 'modules/feedback/templates/feedback-header-message.html',
      controller: 'HeaderMessageController as message'
    });

  });

})();
