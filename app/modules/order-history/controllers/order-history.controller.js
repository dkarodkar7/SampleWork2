(function () {
    'use strict';

    angular.module('pb.orderhistory').controller('OrderHistoryCtrl', [ '$log', '$scope', 'MockDataFactory', 'moment',
        function ($log, $scope, MockDataFactory, moment) {
            var _this                   = this;

            // Get JSON Mock data & set to list
            // Mapped to list directives through isolated scope
            //
            _this.orderHistoryData = MockDataFactory.query({filename: 'order_history'});

            // Get JSON Mock data & set to list
            // Mapped to list directives through isolated scope
            //
            MockDataFactory.query({filename: 'espot'}).$promise.then(function(data){
                _this.espotModel = data[2].orderhistory;
            });

            //_this.predicate = 'date';
            //_this.espot = MockDataFactory.query({filename: 'espot'});
            //
            //_this.reverse = true;
            //_this.order = function( predicate ) {
            //    _this.reverse = (_this.predicate === predicate) ? !_this.reverse : false;
            //    _this.predicate = predicate;
            //};
        }]
    );
})();
