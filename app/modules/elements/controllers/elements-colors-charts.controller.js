(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('ChartColorsController', function($log, ColorsResolve) {

    var _this = this;

    _this.colorData = ColorsResolve.colors;

    _this.colors = {
      blues: {
        $blue1: _this.colorData.blues[0].hex,
        $blue2: _this.colorData.blues[1].hex,
        $blue3: _this.colorData.blues[2].hex,
        $blue4: _this.colorData.blues[3].hex,
        $blue5: _this.colorData.blues[4].hex,
        $blue6: _this.colorData.blues[5].hex
      },
      grays: {
        $gray1: _this.colorData.chartgrays[0].hex,
        $gray2: _this.colorData.chartgrays[1].hex,
        $gray3: _this.colorData.chartgrays[2].hex,
        $gray4: _this.colorData.chartgrays[3].hex,
        $gray5: _this.colorData.chartgrays[4].hex,
        $gray6: _this.colorData.chartgrays[5].hex
      },
      charts: {
        $green: _this.colorData.charts[0].hex,
        $blue: _this.colorData.charts[1].hex,
        $purple: _this.colorData.charts[2].hex,
        $yellow: _this.colorData.charts[3].hex,
        $orange: _this.colorData.charts[4].hex,
        $red: _this.colorData.charts[5].hex
      }
    };


  });

})();
