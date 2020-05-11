(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDataController',
  function($log) {

    var _this = this;

    _this.rowdata = [
        {
          date: 'Date',
          recipient: 'Recipient',
          carrier: 'Carrier',
          shipping: 'Shipping',
          tracking: 'Tracking',
          status: 'Status',
          amount: 'Amount'
        },
      {
        date: 'Date',
        recipient: 'Recipient',
        carrier: 'Carrier',
        shipping: 'Shipping',
        tracking: 'Tracking',
        status: 'Status',
        amount: 'Amount'
      }
    ];

    _this.rowclick = function(item, event) {
      event.preventDefault();
      event.stopPropagation();
      item.selected = !item.selected;
    };

    _this.xeditable = {
      data: [
        {
          first_name: 'John',
          last_name: 'Smth',
          carrier: 'USPS'
        },
        {
          first_name: 'Susie',
          last_name: 'Queue'
        }
      ],
      carriers: ['USPS', 'FedEx']
    };

  });

})();
