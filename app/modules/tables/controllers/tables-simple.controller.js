(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesSimpleController', function($log, PeopleResolve) {

    var _this = this;

    _this.people = PeopleResolve;


  });

})();
