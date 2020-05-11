(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatableController',
  function($log, PeopleResolve, moment) {

    var _this = this;


    _this.table = {
      data: PeopleResolve,
      sort: {
        type: 'first_name',
        reverse: false,
        change: function(key) {
          _this.table.sort.type = key;
          _this.table.sort.reverse = !_this.table.sort.reverse;
        }
      },
      paging: {
        size: 10,
        sizes: [10, 25, 50, 100]
      },
      groups: {
        min: 5,
        max: 'Infinity'
      },
      showDetails: function(item, event) {
        event.stopPropagation();
        item.showDetails = !item.showDetails;
      },
      selectEmail: function(item, event) {
        event.preventDefault();
        event.stopPropagation();
      },
      showMore: function(item, bool, event) {
        event.preventDefault();
        event.stopPropagation();

        if (bool) {
          item.limit = _this.table.groups.max;
          return;
        }
        else {
          item.limit = undefined;
        }
      },
      search: {

      },
      searchClear: function() {
        _this.table.search.$ = '';
      },
      selectedRows: [],
      selectRow: function(data, $event) {
        $event.stopPropagation();

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
      },
      daterangepicker: {
        date: {
          startDate: moment().startOf('month'),
          endDate: moment().endOf('month')
        },
        options: {
          singleDatePicker: false,
          opens: 'center',
          ranges: {
            Today: [moment(), moment()],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Month to date': [moment().startOf('month'), moment()],
            'Year to date': [moment().startOf('year'), moment()]
          },
          eventHandlers: {
            'apply.daterangepicker': function(ev, picker) {
              _this.table.daterangepicker.displayDate(picker.startDate, picker.endDate);
            }
          }
        },
        displayDate: function(start, end) {

          var startDate = start || _this.table.daterangepicker.date.startDate;
          var endDate = end || _this.table.daterangepicker.date.endDate;

          var dateDiff = endDate.diff(startDate, 'days');
          var result = '';

          if (dateDiff === 0) {
            result = 'Today ' + moment(startDate).format('MM/DD/YYYY');
          }
          else if (dateDiff === 6) {
            result = 'Last 7 days';
          }
          else {
            result = 'From ' + moment(startDate).format('MM/DD/YYYY') + ' to ' + moment(endDate).format('MM/DD/YYYY');
          }

          return result;
        }
      }
    };

  });


  //TODO: this filter handles the daterange and should be moved to the core/filters
  //NOTE: may want to change filter name, this handles a single date in the object
  angular.module('pb.ds.tables').filter('daterange', function($log, moment) {
    return function(items, start, end) {
      //$log.debug('FROM:', moment(start).unix(), 'TO:', moment(end).unix());

      var dateStart = moment(start).unix();
      var dateEnd = moment(end).unix();

      var result = [];

      angular.forEach(items, function(value, index) {
        //$log.debug(value, index);
        var itemDate = moment(value.date.created).unix();

        if (itemDate > dateStart && itemDate < dateEnd) {
          result.push(value);
        }
      });

      return result;

    };
  });

})();
