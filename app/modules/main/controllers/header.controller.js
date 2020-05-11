(function() {

  'use strict';

  angular.module('app').controller('HeaderController', function($log, $scope, $rootScope, $location, $state, $timeout, MockDataFactory) {
      var _this = this;
      var windowHeight = window.outerHeight;
      var url = $location.url();
      // to show / hide notifications cirlc or up down arrow circle in dropdown
      if (url == '/dashboard' || url == '/dashboard?notifications=true') {
          _this.onDashboard = true;
      }

      _this.nav = MockDataFactory.query({filename: 'navigation'});

      //NOTIFICATIONS
      // notifications when authenticated in dropdown and orange icon
      MockDataFactory.query({filename: 'notifications'}).$promise.then(function(data){
          _this.notifications = data[0].PurchasePower[0].list;
      });

      //USER
      MockDataFactory.get({filename: 'user'}).$promise.then(function(data){
          _this.user = data;
      });

      _this.currentItemsInCart = '8';
      _this.predicate = 'label';
      _this.showmenu = false;
      _this.showsearch = false;

      // mock user authentication
      _this.userAuthenticated = false;

      // CLOSE MENU ANY TIME STATECHANGES
      $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          if(_this.showmenu == true){ _this.showmenu = false; }
          _this.bodyHeight();
      });


      // SEARCH
      _this.searchSubmit = function($event, baynoteHREF) {
          var query = '&q=' + encodeURIComponent($event.target.value);
          window.open(baynoteHREF + query, "_self");
      }


      // CENTER DROPDOWN UNDER ^v
      _this.setCenter = function($event) {
          var marginLeft = $($event.target).parents('.dropdown').width() - 22;
          var menuWidth = $($event.target).parents('.dropdown').find('.dropdown-menu').width();

          if(menuWidth != null){
            marginLeft = marginLeft - (menuWidth/2);
          }

          $($event.target).parents('.dropdown').find('.dropdown-menu').css({'margin-left': marginLeft});
      }

      // Language Pop Over
      _this.dynamicPopover = {
          templateUrl: 'modules/main/templates/popovers/language-select.html',
          title: 'Title'
      };

      // set height of body when menu is open
      _this.bodyHeight = function($event) {
          if(_this.showmenu == true){
              $timeout(function() {
                  var menuHeight = $('.menu-overlay').outerHeight();

                  if(menuHeight > windowHeight){
                      $('html').height(menuHeight).addClass('menu-open scroll');
                      $('body').height(menuHeight);
                  }else{
                      $('html').height(windowHeight).addClass('menu-open');
                      $('body').height(windowHeight);
                      $('.menu-overlay').height(windowHeight);
                  }
              }, 10);
          }else{
              $('html').height('auto').removeClass('menu-open scroll');
              $('body').height('auto');
          }
      }

      $rootScope.$on('$locationChangeSuccess', function(event){
          url = $location.url();

          // to show / hide notifications cirlc or up down arrow circle in dropdown
          if (url == '/dashboard' || url == '/dashboard?notifications=true') {
              _this.onDashboard = true;
          } else {
              _this.onDashboard = false;
          }
      });

  });

})();