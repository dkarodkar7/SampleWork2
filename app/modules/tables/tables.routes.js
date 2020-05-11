(function() {

  'use strict';

  angular.module('pb.ds.tables').config(function($stateProvider) {
    $stateProvider.state('tables', {
      abstract: true,
      url: '/tables',
      templateUrl: 'modules/tables/templates/tables.html',
      controller: 'TablesController as tables',
      data: {
        pageTitle: 'Tables',
        access: 'public',
        bodyClass: 'tables'
      }
    })

    .state('tables.datatable', {
      abstract: true,
      url: '/datatable',
      templateUrl: 'modules/tables/templates/tables-datatable.html'
    })

    .state('tables.datatable.page', {
      url: '',
      views: {
        basic: {
          templateUrl: 'modules/tables/templates/tables-basic.html',
          controller: 'TablesSimpleController as simple',
          resolve: {
            PeopleResolve: function($log, MockDataFactory) {
              return MockDataFactory.query({filename: 'people'});
            }
          }
        },
        overview: {
          templateUrl: 'modules/tables/templates/tables-datatable-overview.html',
          controller: 'TablesOverviewController as overview'
        },
        toolbar: {
          templateUrl: 'modules/tables/templates/tables-datatable-toolbar.html'
        },
        data: {
          templateUrl: 'modules/tables/templates/tables-datatable-data.html',
          controller: 'TablesDataController as data'
        },
        tabbed: {
          templateUrl: 'modules/tables/templates/tables-datatable-tabbed.html'
        }
      }
    })


    .state('tables.paging', {
      url: '/datatable/paging',
      templateUrl: 'modules/tables/templates/tables-datatable-popup-paging.html',
      controller: 'TablesDatatableController as datatable',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'ds_users'});
        }
      },
      data: {
        pageTitle: 'Paging',
        access: 'public',
        bodyClass: 'tables fullscreen'
      }
    })

    .state('tables.infiniteScroll', {
      url: '/datatable/infiniteScroll',
      templateUrl: 'modules/tables/templates/tables-datatable-popup-infinite-scroll.html',
      controller: 'TablesDatatableInfiniteScrollController as datatable',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'ds_users'});
        }
      },
      data: {
        pageTitle: 'Infinite Scroll',
        access: 'public',
        bodyClass: 'tables fullscreen'
      }
    })

    .state('tables.datatablesnet', {
      url: '/datatablesnet',
      templateUrl: 'modules/tables/templates/tables-datatables.net.html',
      controller: 'TablesDatatablesNetController as datatablesnet',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'ds_users'});
        }
      },
      data: {
        pageTitle: 'Infinite Scroll',
        access: 'public',
        bodyClass: 'tables fullscreen'
      }
    })

    .state('tables.facetedsearch', {
      url: '/facetedsearch',
      templateUrl: 'modules/tables/templates/tables-faceted-search.html',
      controller: 'TablesFacetedSearchController as faceted',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'ds_users'});
        }
      },
      data: {
        pageTitle: 'Faceted Search',
        access: 'public',
        bodyClass: 'tables fullscreen'
      }
    });

  });

})();
