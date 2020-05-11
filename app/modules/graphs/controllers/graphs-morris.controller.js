(function() {

  'use strict';

  angular.module('pb.ds.graphs').controller('MorrisController', function($log) {

    var _this = this;

    _this.donut = {
      data: [{
        label: 'Download Sales',
        value: 12
      }, {
        label: 'In-Store Sales',
        value: 30
      }, {
        label: 'Mail-Order Sales',
        value: 20
      }]
    };

    _this.bar = {
      data: [{
        y: '2006',
        a: 100,
        b: 90
      }, {
        y: '2007',
        a: 75,
        b: 65
      }, {
        y: '2008',
        a: 50,
        b: 40
      }, {
        y: '2009',
        a: 75,
        b: 65
      }, {
        y: '2010',
        a: 50,
        b: 40
      }, {
        y: '2011',
        a: 75,
        b: 65
      }, {
        y: '2012',
        a: 100,
        b: 90
      }],
      barX: 'y',
      barY: ['a', 'b'],
      barLabels: ['Series A', 'Series B']
    };

    _this.line = {
      data: [{
        y: '2006',
        a: 100,
        b: 90
      }, {
        y: '2007',
        a: 75,
        b: 65
      }, {
        y: '2008',
        a: 50,
        b: 40
      }, {
        y: '2009',
        a: 75,
        b: 65
      }, {
        y: '2010',
        a: 50,
        b: 40
      }, {
        y: '2011',
        a: 75,
        b: 65
      }, {
        y: '2012',
        a: 100,
        b: 90
      }],
      xKey: 'y',
      yKeys: ['a', 'b'],
      labels: ['Serie A', 'Serie B']
    };

    _this.area = {
      data: [{
        y: '2006',
        a: 100,
        b: 90
      }, {
        y: '2007',
        a: 75,
        b: 65
      }, {
        y: '2008',
        a: 50,
        b: 40
      }, {
        y: '2009',
        a: 75,
        b: 65
      }, {
        y: '2010',
        a: 50,
        b: 40
      }, {
        y: '2011',
        a: 75,
        b: 65
      }, {
        y: '2012',
        a: 100,
        b: 90
      }],
      xKey: 'y',
      yKeys: ['a', 'b'],
      labels: ['Serie A', 'Serie B']
    };

  });

})();
