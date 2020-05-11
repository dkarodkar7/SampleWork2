(function () {

    'use strict';

  //app constants
  angular.module('app').constant('config', {
    debug: true,
    rememberMeCookieName : "pb.login.email",
    passwordRegex : "/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/"
  });
})();
