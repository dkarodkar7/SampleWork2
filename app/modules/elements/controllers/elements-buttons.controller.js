(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('ButtonsController', function($log) {

    var _this = this;

    _this.singleModel = 1;

    _this.radioModel = 'Middle';

    _this.checkModel = {
      left: false,
      middle: true,
      right: false
    };

  });

})();
