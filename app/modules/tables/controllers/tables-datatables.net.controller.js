(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatablesNetController', function($log, $compile, $scope, $filter, $window, PeopleResolve, DTOptionsBuilder, DTColumnBuilder, moment) {

    var _this = this;

    //datatable model
    _this.datatable = {
      titleHtml: '<input type="checkbox" ng-model="datatablesnet.datatable.selectAll" ng-click="datatablesnet.datatable.toggleAll(datatablesnet.datatable.selectAll, datatablesnet.datatable.selected)">',
      selected: {},
      selectAll: false,
      toggleAll: function toggleAll(selectAll, selectedItems) {
        for (var id in selectedItems) {
          if (selectedItems.hasOwnProperty(id)) {
            selectedItems[id] = selectAll;
          }
        }
      },
      toggleOne: function toggleOne(selectedItems) {
        var me = _this;
        for (var id in selectedItems) {
          if (selectedItems.hasOwnProperty(id)) {
            if (!selectedItems[id]) {
              me.selectAll = false;
              return;
            }
          }
        }
        me.selectAll = true;
      },
      edit: function(id) {
        $window.alert('Handle the edit function for row ' + id);
      },
      delete: function(id) {
        $window.alert('Handle the delete function for row ' + id);
      }
    };

    //OPTIONS
    _this.dtOptions = DTOptionsBuilder
    .fromFnPromise(PeopleResolve.$promise)
    .withPaginationType('full_numbers')
    .withDOM('<"row toolbar spacer-bottom-md"<"col-md-6 table-buttons"T><"col-md-6"f>>t<"row"<"col-md-5"i><"col-md-2 text-center"l><"col-md-5"p>>')
    .withOption('language', {
      search: 'Search',
      lengthMenu: '_MENU_ per page',
      info: '_START_-_END_ of _TOTAL_',
      paginate: {
        first: '&lt:&lt;',
        previous: '&lt;',
        next: '&gt;',
        last: '&gt;&gt;'
      }
    })
    .withOption('headerCallback', function(header) {
      if (!_this.datatable.headerCompiled) {
        // Use this headerCompiled field to only compile header once
        _this.datatable.headerCompiled = true;
        $compile(angular.element(header).contents())($scope);
      }
    })
    .withOption('createdRow', function(row, data, dataIndex) {
      // Recompiling so we can bind Angular directive to the DT
      $compile(angular.element(row).contents())($scope);
    })
    .withOption('order', [[2, 'asc']]) //column 1 (the ID) is hidden
    .withBootstrap()
    .withBootstrapOptions({
      pagination: {
        classes: {
          ul: 'pagination pagination-sm test'
        }
      },
      TableTools: {
        classes: {
          //container: 'btn-group',
          buttons: {
            normal: 'btn btn-sm btn-default'
          }
        }
      }
    })
    .withTableTools('')
    .withTableToolsButtons([
      {
        sExtends: 'text',
        sButtonText: '<i class="fa fa-fw fa-plus"></i>',
        fnClick: function(nButton, oConfig, oFlash) {
          $window.alert('Handle adding a new record.');
        }
      },
      {
        sExtends: 'text',
        sButtonText: '<i class="fa fa-fw fa-trash-o"></i>',
        fnClick: function(nButton, oConfig, oFlash) {
          var selected = [];

          angular.forEach(_this.datatable.selected, function(value, key, obj) {
            if (value) {
              selected.push(key);
            }
          });

          $window.alert('Handle delete of rows: ' + selected.join(','));
        },
        fnSelect: function(nButton, oConfig, nRow) {
          $log.debug(nRow);

          if (nRow.length === 1) {
            angular.element(nButton).removeClass('hidden');
          }
          else {
            angular.element(nButton).addClass('hidden');
          }

        }
      }
    ]);

    //COLUMNS
    _this.dtColumns = [
      DTColumnBuilder.newColumn(null).withTitle(_this.datatable.titleHtml).renderWith(function(data, type, full, meta) {
        _this.datatable.selected[full.id] = false;
        return '<input type="checkbox" ng-model="datatablesnet.datatable.selected[' + data.id + ']" ng-click="datatablesnet.datatable.toggleOne(datatablesnet.datatable.selected)">';
      }).notSortable(),
      DTColumnBuilder.newColumn('id').withTitle('ID').notVisible(),
      DTColumnBuilder.newColumn('first_name').withTitle('First&nbsp;name'),
      DTColumnBuilder.newColumn('last_name').withTitle('Last&nbsp;name'),
      DTColumnBuilder.newColumn('email').withTitle('Email').renderWith(function(data, type, full, meta) {
        return '<a href="">' + data + '</a>';
      }),
      DTColumnBuilder.newColumn('country').withTitle('Country').withClass('text-nowrap'),
      DTColumnBuilder.newColumn('date.created').withTitle('Created').withOption('sType', 'date').renderWith(function(data, type, full) {
        return moment(data).format('MM/DD/YYYY');
      }),
      DTColumnBuilder.newColumn('groups').withTitle('Groups').renderWith(function(data, type, full) {
        return data.join(', ');
      }).notSortable(),
      DTColumnBuilder.newColumn(null).withTitle('').renderWith(function(data, type, full, meta) {

        var html = '';
        html += '<div class="dropdown pull-right">';
        html += '<a href="" class="dropdown-toggle text-nowrap" data-toggle="dropdown">';
        html += 'Actions <i class="fa fa-fw fa-angle-down"></i>';
        html += '</a>';
        html += '<ul class="dropdown-menu dropdown-menu-right" role="menu">';
        html += '<li><a href="" ng-click="datatablesnet.datatable.edit(' + data.id + ')">Edit</a></li>';
        html += '<li><a href="" ng-click="datatablesnet.datatable.edit(' + data.id + ')">Delete</a></li>';
        html += '</ul>';
        html += '</div>';

        return html;
      }).notSortable()
    ];

  });

})();
