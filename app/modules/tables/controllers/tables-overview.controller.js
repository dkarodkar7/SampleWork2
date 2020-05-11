(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesOverviewController',
  function($log, moment) {

    var _this = this;


    _this.table = {
      data: [
        {
          selected: false,
          id: 1
        },
        {
          selected: false,
          id: 2
        },
        {
          selected: false,
          id: 3
        }
      ],
      sort: {
        type: 'first_name',
        reverse: false,
        change: function(key) {
          _this.table.sort.type = key;
          _this.table.sort.reverse = !_this.table.sort.reverse;
        }
      },
      selectedRows: [],
      selectRow: function(data, event) {
        event.stopPropagation();

        if (_this.table.selectedRows.indexOf(data.id) === -1) {
          _this.table.selectedRows.push(data.id);
          data.selected = true;
        }
        else {
          _this.table.selectedRows.splice(_this.table.selectedRows.indexOf(data.id), 1);
          _this.table.allRowsSelected = false;
          data.selected = false;
        }
      },
      selectAllRows: function() {
        var checked = !_this.table.selectAllFilteredRows();

        _this.table.selectedRows = [];

        angular.forEach(_this.table.dataFiltered, function(value, key) {
          value.selected = checked;

          if (checked) {
            _this.table.selectedRows.push(value.id);
          }

        });

      },
      selectAllFilteredRows: function() {
        var selected = 0;

        angular.forEach(_this.table.dataFiltered, function(value, key) {
          if (value.selected) {
            selected++;
          }
        });

        return (selected !== 0 && selected === _this.table.dataFiltered.length);
      }
    };

  });


})();
