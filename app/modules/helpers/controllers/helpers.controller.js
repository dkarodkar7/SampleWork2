(function() {

  'use strict';

  angular.module('pb.ds.helpers').controller('HelpersController', function($log) {

    var _this = this;

    _this.spacers = {
      top: {
        values: ['no top spacer', 'spacer-top-xs (10px)', 'spacer-top-sm (20px)', 'spacer-top-md (30px)', 'spacer-top-lg (40px)', 'spacer-top-xl (50px)'],
        selected: 'spacer-top-sm (20px)'
      },
      bottom: {
        values: ['no bottom spacer', 'spacer-bottom-xs (10px)','spacer-bottom-sm (20px)', 'spacer-bottom-md (30px)', 'spacer-bottom-lg (40px)', 'spacer-bottom-xl (50px)'],
        selected: 'spacer-bottom-sm (20px)'
      }
    };


    _this.backgrounds = [
      'bg-header-color',
      'bg-header-color-alt',
      'bg-white',
      'bg-pb-medium-blue-300',
      'bg-pb-medium-blue',
      'bg-pb-medium-blue-700',
      'bg-pb-blue-300',
      'bg-pb-blue',
      'bg-pb-blue-700',
      'bg-pb-purple-300',
      'bg-pb-purple',
      'bg-pb-purple-700',
      'bg-pb-cyan-300',
      'bg-pb-cyan',
      'bg-pb-cyan-700',
      'bg-pb-magenta-300',
      'bg-pb-magenta',
      'bg-pb-magenta-700',
      'bg-pb-dark-orange-300',
      'bg-pb-dark-orange',
      'bg-pb-dark-orange-700',
      'bg-pb-orange-300',
      'bg-pb-orange',
      'bg-pb-orange-700',
      'bg-pb-yellow-300',
      'bg-pb-yellow',
      'bg-pb-green-300',
      'bg-pb-green',
      'bg-pb-green-700',
      'bg-pb-dark-green-300',
      'bg-pb-dark-green',
      'bg-pb-dark-green-700',
      'bg-pb-gray-700',
      'bg-pb-gray-500',
      'bg-pb-gray-400',
      'bg-pb-gray-300',
      'bg-pb-gray',
      'bg-pb-light-gray',
      'bg-pb-bg1',
      'bg-pb-bg2',
      'bg-pb-bg3',
      'bg-pb-bg4',
      'bg-pb-bg5'
    ];

    _this.foregrounds = [
      'text-medium-blue-300',
      'text-medium-blue',
      'text-medium-blue-700',
      'text-blue-300',
      'text-blue',
      'text-blue-700',
      'text-purple-300',
      'text-purple',
      'text-purple-700',
      'text-cyan-300',
      'text-cyan',
      'text-cyan-700',
      'text-magenta-300',
      'text-magenta',
      'text-magenta-700',
      'text-dark-orange-300',
      'text-dark-orange',
      'text-dark-orange-700',
      'text-orange-300',
      'text-orange',
      'text-orange-700',
      'text-yellow-300',
      'text-yellow',
      'text-green-300',
      'text-green',
      'text-green-700',
      'text-dark-green-300',
      'text-dark-green',
      'text-dark-green-700',
      'text-gray-700',
      'text-gray-500',
      'text-gray-400',
      'text-gray-300',
      'text-gray',
      'text-light-gray',
      'text-bg1',
      'text-bg2',
      'text-bg3',
      'text-bg4',
      'text-bg5'
    ];

  });

})();
