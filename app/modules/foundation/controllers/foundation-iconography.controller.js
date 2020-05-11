(function() {

  'use strict';

  angular.module('pb.ds.foundation').controller('IconographyController', function($log, IconsResolve) {

    var _this = this;

    _this.faIcons = IconsResolve;

    _this.pbIcons =  [
      'addressbook',
      'addtocatalog',
      'addtofolder',
      'catalog',
      'connection',
      'databaseconnection',
      'filesystemconnection',
      'folder',
      'labellayer',
      'layer',
      'line',
      'map',
      'metadata',
      'metadatatemplate',
      'newcatalog',
      'newconnection',
      'newfolder',
      'newlayer',
      'newmap',
      'newtable',
      'newtile',
      'point',
      'polygon',
      'scale',
      'table',
      'tile',
      'treeview',
      'admin'
    ];

  });

})();
