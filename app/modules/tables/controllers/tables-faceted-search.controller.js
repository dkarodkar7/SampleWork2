(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesFacetedSearchController',
  function($log, $filter, $scope, PeopleResolve) {

    var _this = this;


    //FACET CODE IS FOR DEMO PURPOSES ONLY, APP API SHOULD BE USED TO RETURN RESULTS, COUNTS, ETC.
    _this.facet = {
      list: [],
      groups: [
        'Root',
        'Contributors',
        'Danbury',
        'Shelton',
        'Stamford',
        'Troy',
        'Noida',
        'Pune',
        'Austin',
        'Lanham',
        'Boulder',
        'Watford',
        'Paris',
        'Sydney',
        'Dallas',
        'San Diego',
        'Toronto',
        'Chatham',
        'Kyiv',
        'Hartford'
      ],
      clear: function() {
        _this.facet.list = [];

        angular.forEach(_this.table.search, function(value, key, obj) {
          var parent = value;

          angular.forEach(parent, function(value, key, obj) {
            if (parent[key]) {
              parent[key] = false;
            }
          });

          _this.table.search.country = '';

        });

      },
      selectChange: function() {
        var selected = _this.table.search.country;

        if (selected) {
          _this.facet.list.push(_this.table.search.country);
        }

      },
      checked: function(value, item) {
        if (value) {
          _this.facet.list.push(item);
        }
        else {
          var index = _this.facet.list.indexOf(item);
          _this.facet.list.splice(index, 1);
        }
      },

      clearBadge: function(item, event) {
        event.stopPropagation();
        event.preventDefault();

        var itemIndex = _this.facet.list.indexOf(item);
        _this.facet.list.splice(itemIndex, 1);

        if (_this.table.search.country === item) {
          _this.table.search.country = '';
          return;
        }

        angular.forEach(_this.table.search, function(value, key, obj) {
          var parent = value;

          angular.forEach(parent, function(value, key, obj) {
            if (key === item) {
              parent[item] = false;
            }
          });

        });

      }

    };



    _this.table = {
      data: PeopleResolve,
      sort: {
        data: [
          {
            label: 'First name',
            value: 'first_name'
          },
          {
            label: 'Last name',
            value: 'last_name'
          }
        ],
        selected: 'First name',
        type: 'first_name',
        reverse: false,
        change: function(item) {
          _this.table.sort.type = item.value;
          _this.table.sort.selected = item.label;
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
        _this.table.searchtext.$ = '';
      },
      filter: function(item) {
        var result = true;


        if (_this.table.search.country && _this.table.search.country !== '') {
          if (item.country !== _this.table.search.country) {
            result = false;
          }
        }


        //store the selected groups
        var groups = [];

        angular.forEach(_this.table.search.group, function(value, key, obj) {
          if (value) {
            groups.push(key);
          }
        });

        //loop through each selected
        if (groups.length > 0) {
          angular.forEach(groups, function(value, index, obj) {
            if (item.groups.indexOf(value) === -1) {
              result = false;
            }
          });
        }


        //store the selected userTypes
        var userTypes = [];

        angular.forEach(_this.table.search.userType, function(value, key, obj) {
          if (value) {
            userTypes.push(key);
          }
        });

        //loop through each selected
        if (userTypes.length > 0) {

          angular.forEach(userTypes, function(value, index, obj) {
            if (item.userType !== value) {
              result = false;
            }
          });
        }

        return result;

      }
    };



    $scope.$watch('faceted.table.search.country', function(newVal, oldVal) {
      $log.debug(newVal, oldVal);

      if (newVal !== oldVal) {
        var index = _this.facet.list.indexOf(oldVal);

        if (index !== -1) {
          _this.facet.list.splice(index, 1);
        }

      }

    });

  });


  angular.module('pb.ds.tables').filter('count', function($log) {
    return function(input, key, obj) {

      var count = 0;

      angular.forEach(obj, function(o) {
        if (o[key] === input) {
          count++;
        }
      });

      return count;
    };
  });

  angular.module('pb.ds.tables').filter('countGroups', function($log) {
    return function(input, key, obj) {

      var count = 0;

      angular.forEach(obj, function(value, index, obj) {
        if (value[key].indexOf(input) !== -1) {
          count++;
        }
      });

      return count;
    };
  });

})();
