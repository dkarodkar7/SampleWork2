(function() {

    'use strict';

    angular.module('app').directive('pbOnboarding', function() {

    	var link = function(scope, element, attr, controller){	

    	};

        return {
            restrict: 'AE',
            templateUrl: 'modules/account/templates/onboarding.html',
            controller: 'onBoardingCtrl as onboardingCtrl',
            link: link
        };
    })

    .directive('tourStart', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controllers) {
                element.bind('click', function () {
                    var $drawer         = $('.onboarding');
                    var $drawerContent  = $drawer.find('.onboarding__content');
                    var drawerIsOpen        = scope.onboardOpened;
                    var headerHeight        = $('header').height();
                    var drawerOffsetTop     = $drawer.offset().top;
                    var val                 = -(drawerOffsetTop - headerHeight);
                    //var drawerContentHeight = $('.drawer__content').find('.container-fluid').height();
                    var drawerContentHeight = footerPush();

                    $drawer.css('top', val);
                    $drawer.toggleClass('open');
                    $drawerContent.css({'margin-bottom': val});
                    $('body','html').scrollTop(0);
                    

                    function footerPush() {
                        // check if footer is not at the bottom
                        var $footer             = $('footer');
                        var windowHieght        = $(window).height();
                        var headerHeight        = $('header').outerHeight(true);
                        var footerHeight        = $footer.outerHeight(true);
                        var footerOffsetTop     = $footer.offset().top;
                        var drawerNavHeight     = $('.onboarding__navbar').outerHeight(true);
                        var drawerContentHeight = null;

                        // expand drawer content to fill screen height - footer height
                        if ( footerOffsetTop > windowHieght || (footerOffsetTop + footerHeight) > windowHieght) {
                            drawerContentHeight = $('.onboarding__content').find('.container-fluid').height();
                        }
                        else {
                            drawerContentHeight = windowHieght - headerHeight - footerHeight - drawerNavHeight;
                        }

                        return drawerContentHeight;
                    }
                });
            }
        };
    })
})();