(function() {

  'use strict';

  angular.module('pb.ds.foundation').controller('TypographyController', function($log) {

    var _this = this;

    _this.header = [
      { tag: 'H1', font:'Precision Sans Light 32', use:'Main head', class: '', extraclass: 'h1', color: '\#CF0989', altclass:'.alt', altcolor: '#2E2E2E'},
      { tag: 'H2', font:'Precision Sans Regular 20', use:'Section Header / Product Title', class: '', extraclass: 'h2', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H3', font:'Precision Sans Bold 18', use:'Sub Section Header', class: '', extraclass: 'h3', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H4', font:'Helvetica Neue Bold 16', use:'Sub Sub Section Header', class: '', extraclass: 'h4', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H5', font:'Helvetica Neue Bold 14', use:'Small Header', class: '', extraclass: 'h5', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H6', font:'Helvetica Neue Bold 12', use:'Extra Small Header', class: '', extraclass: 'h6', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'}

    ];

    _this.bodyCopy = [
      { desc: 'Body text', font: 'Helvetica Neue Regular 14', class: '', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Caption', font: 'Helvetica Neue Regular 12', class: 'caption', variable: '$pb-gray-500', color: '#4E4E4E'},
      { desc: 'Body text large', font: 'Helvetica Neue Regular 16', class: 'text-large', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Body text small', font: 'Helvetica Neue Regular 12', class: 'text-small', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Body text xsmall, copyrights, footnotes', font: 'Helvetica Neue Regular 10', class: 'text-xs', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Hyperlink', font: 'underlying font', class: '', variable: '$link-color, $pb-medium-blue', color: '#0072b8'}
    ];

    _this.navigationItems = [
      { desc: 'Basic Nav items', color: '#FFFFFF'},
      { desc: 'Tiered Dropdown Nav items', color: '#FFFFFF'},
      { desc: 'Tiered Dropdown Nav item (active)', color: '#3E53A4'},
      { desc: 'Tiered Dropdown Section Header (within dropdown)', color: '#2E2E2E'},
      { desc: 'Side Nav items', color: '#717171'},
      { desc: 'Side Nav Items (hover)', color: '#2E2E2E'},
      { desc: 'Side Nav Items (active)', color: '#3E53A4'},
      { desc: 'Tab Text', color: '#717171'},
      { desc: 'Tab Tex (active)', color: '#2E2E2E'},
      { desc: 'Breadcrumbs', color: '#717171'},
      { desc: 'Breadcrumbs (hover)', color: '#2E2E2E'}
    ];

    _this.formsInputs = [
      { desc: 'Field Labels', color: '#717171'},
      { desc: 'Radio button labels', color: '#717171'},
      { desc: 'Radio button labels (active)', color: '#3E53A4'},
      { desc: 'Check Box labels', color: '#717171'},
      { desc: 'Check Box labels (active)', color: '#3E53A4'}
    ];

    _this.buttons = [
      { desc:'Primary Button Text', color:'#FFFFFF'},
      { desc:'Secondary Button Text', color:'#3E53A4'},
      { desc:'Tertiary Button Text', color:'#3E53A4'},
      { desc:'Toggle Text', color:'#717171'},
      { desc:'Toggle Text (active)', color:'#FFFFFF'}
    ];

    _this.dataTables = [
      { desc:'Column Headers', color:'#2E2E2E'}
    ];

    _this.fonts = [
      {
        fontName: 'Precision Sans Light',
        font: 'PrecisionSans_W_Lt'
      }, {
        fontName: 'Precision Sans Light Italic',
        font: 'PrecisionSans_W_LtIt'
      }, {
        fontName: 'Precision Sans Regular',
        font: 'PrecisionSans_W_Rg'
      }, {
        fontName: 'Precision Sans Regular Italic',
        font: 'PrecisionSans_W_RgIt'
      }, {
        fontName: 'Precision Sans Medium',
        font: 'PrecisionSans_W_Md'
      }, {
        fontName: 'Precision Sans Medium Italic',
        font: 'PrecisionSans_W_MdIt'
      }, {
        fontName: 'Precision Sans Bold',
        font: 'PrecisionSans_W_Bd'
      }, {
        fontName: 'Precision Sans Bold Italic',
        font: 'PrecisionSans_W_BdIt'
      }
    ];






  });

})();
