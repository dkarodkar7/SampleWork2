(function () {
    'use strict';
    angular.module('pb.orderhistory').controller('OrderHistoryListCtrl', function() {
        var _this                   = this;
        _this.oldestYear            = null;
        _this.currentYear           = moment().format('YYYY');
        _this.mostRecentActiveYear  = null;
        _this.yearsWithOrdersArray  = [];
        _this.allYearsArray         = [];
        _this.limit                 = 15;

        // Make sure JSON data is resolved
        //
        _this.orderHistoryModel.$promise.then(function(data){
            _this.orderHistoryData = data;
            _this.intializeYearsArray(data);
        });


        _this.intializeYearsArray = function( model ) {
            // Create array of years that have history of orders
            //
            angular.forEach(model, function(_obj, key) {
                var year = parseInt( moment(_obj.orderDate).format('YYYY') );

                if ( $.inArray(year, _this.yearsWithOrdersArray) < 0 ) {
                    this.push( year );
                }
            }, _this.yearsWithOrdersArray);

            // Create an array with all the years that have no order data
            //
            _this.oldestYear = Math.min.apply(Math, _this.yearsWithOrdersArray);
            for(var year = _this.oldestYear; year <= _this.currentYear; year++) {
                var expression  = $.inArray(year, _this.yearsWithOrdersArray) < 0;
                var _obj        = { 'year': year, 'activity': !expression};

                _this.allYearsArray.push( _obj );
            }

            _this.getMostRecentYearWithActivity();
        };

        _this.getMostRecentYearWithActivity = function(){
            angular.forEach(_this.allYearsArray, function(_obj, key){
                if( _obj.activity ) {
                    _this.mostRecentActiveYear  = _obj.year;
                    return true;
                }
            });
        };

        _this.viewMoreListing = function(limit){
            limit += 15;
            return limit;
        };

        _this.mobileClose = function(){
            $('.dropdown.open').removeClass('open');
        };

    });
})();
