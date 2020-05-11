(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatableInfiniteScrollController',
  function($log, PeopleResolve, moment, $scope, $timeout) {

    var _this = this;

    _this.table = {
      limitDefault: 25,
      limit: 25,
      data: PeopleResolve,
      infinite: {
        disabled: false,
        load: function() {

          if (_this.table.limit > _this.table.dataFiltered.length) {
            _this.table.infinite.disabled = false;
            return;
          }

          if (_this.table.infinite.disabled) {
            return;
          }

          _this.table.infinite.disabled = true;

          //simulate a delay when loading more data
          $timeout(function() {
            _this.table.limit = _this.table.limit + 10;
            _this.table.infinite.disabled = false;
          }, 2000);

        },
        reset: function() {
          $scope.$emit('list:reset');
          _this.table.dataFiltered = null;
          _this.table.limit = _this.table.limitDefault;
        }
      },
      sort: {
        type: 'first_name',
        reverse: false,
        change: function(key) {
          _this.table.infinite.reset();
          _this.table.sort.type = key;
          _this.table.sort.reverse = !_this.table.sort.reverse;
        }
      },
      groups: {
        min: 5,
        max: 'Infinity'
      },
      search: {

      },
      searchCountry: function(item) {
        _this.table.search.country = item.country;
        _this.table.infinite.reset();
      },
      searchClear: function() {
        _this.table.search.$ = '';
        _this.table.infinite.reset();
      },
      searchChange: function() {
        _this.table.infinite.reset();
      },
      daterangepicker: {
        date: {
          startDate: moment().startOf('year'),
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
              _this.table.infinite.reset();
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


  //TODO: this filter hasndles the daterange and should be moved to the core/filters
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
