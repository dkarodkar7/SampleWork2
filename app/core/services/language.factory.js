(function() {

  'use strict';

  angular.module('app').factory('languageFactory', function($log, $translateLocalStorage, $rootScope, $translate, tmhDynamicLocale, $http) {

    var language = {};

    language.get = function() {
      return $http.get('core/config/languages.json');
    };

    language.getStored = function() {

      var code = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY');

      var codeArray = code.split('-');

      var language, country, obj;

      //handle languages that have an additional identifier, such as Panjabi: pa-guru-in
      if (codeArray.length > 2) {
        language = codeArray[0] + '-' + codeArray[1];
        country = codeArray[2].toLowerCase();
      }
      else {
        language = codeArray[0];
        country = codeArray[1].toLowerCase();
      }

      obj = {
        code: code,
        language: language,
        country: country
      };

      return obj;
    };

    language.change = function(country, language, rtl) {

      var code = language + '-' + country;

      $rootScope.rtl = (rtl) ? 'rtl' : 'ltr';

      $translate.use(code.toLowerCase());
      tmhDynamicLocale.set(code.toLowerCase());
    };

    return language;

  });

})();
