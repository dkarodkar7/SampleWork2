(function() {

  'use strict';

  angular.module('pb.ds.tables', ['ui.router']);

  angular.module('pb.ds.tables').run(function(editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';
  });

})();
