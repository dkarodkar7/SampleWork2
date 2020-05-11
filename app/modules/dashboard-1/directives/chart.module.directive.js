(function() {
    'use strict';
    angular.module('app').directive('pbChart', function() {

        function controller($scope, $rootScope, $element, MockDataFactory) {
            var _this = this;

            _this.monthsArray = [];
            _this.monthsLabelArray = [];
            _this.curYearMonthlySpendingsArray = [];
            _this.prevYearMonthlySpendingsArray = [];
            _this.customerUsageReportData = [];

            // This is mock data...
            // Make a server request for CAN_BPN data to populate our drop down list
            //
            _this.customerDetails = [
                {
                    "can": "21655003867",
                    "companyName": "ARCADIA UNIVERSITY",
                    "address": {
                        "street": "450 S EASTON RD",
                        "city": "GLENSIDE",
                        "district": "EASTERN",
                        "state": "PA",
                        "country": "USA",
                        "zipcode": "190383215"
                    }
                },
                {
                    "can": "31655003867",
                    "companyName": "ARCADIA UNIVERSITY",
                    "address": {
                        "street": "355 Park Ave S",
                        "city": "GLENSIDE",
                        "district": "EASTERN",
                        "state": "PA",
                        "country": "USA",
                        "zipcode": "190383215"
                    }
                }
            ];


            _this.getUsageReport = function( _canNum ) {
                _this.resetArrays();

                // Mock Request data
                //
                _this.model = MockDataFactory.get({ filename: 'customer_usage_report_' + _canNum });

                _this.model.$promise.then(null,
                    function(){
                        _this.promiseResolvedFailed = true;
                    }
                );

                // Example GET request using $http
                //
                // $http.get('/smbinsights/customers/' + _canNum + '/reports/?report_period=2015_q4&locale=en-us&detail=full', config).then(successCallback, errorCallback);

                try {
                    _this.initializeDataArrays();
                }
                catch( error ) {
                    // handle error if needed
                }
            };


            _this.resetArrays = function(){
                _this.monthsArray.length = 0;
                _this.monthsLabelArray.length = 0;
                _this.curYearMonthlySpendingsArray.length = 0;
                _this.prevYearMonthlySpendingsArray.length = 0;
                _this.customerUsageReportData.length = 0;
                _this.recommendations = false;
            };

            _this.initializeDataArrays = function() {
                // Data promise
                //
                _this.model.$promise.then(function (_data) {
                    _this.customerUsageReportData = _data;
                    _this.recommendations = _data.recommendations;

                    _this.annualData = _data.annualData;
                    _this.monthlySpending = _data.annualData.monthlySpendings;

                    _this.extractMonthsFromMonthlySpendingArray(_this.monthlySpending);
                    _this.extractCurMonthSpendingFromMonthlySpendingArray(_this.monthlySpending);
                    _this.extractPrevMonthSpendingFromMonthlySpendingArray(_this.monthlySpending);
                });
            };

            _this.extractMonthsFromMonthlySpendingArray = function(_array){
                angular.forEach(_array, function(_obj, key) {
                    this.push( _obj.month.substring(0, 3) );
                }, _this.monthsLabelArray);

                angular.forEach(_array, function(_obj, key) {
                    this.push( _obj.month );
                }, _this.monthsArray);
            };

            _this.extractCurMonthSpendingFromMonthlySpendingArray = function(_array) {
                angular.forEach(_array, function(_obj, key) {
                    this.push( _obj.current.toFixed(2) );
                }, _this.curYearMonthlySpendingsArray);
            };

            _this.extractPrevMonthSpendingFromMonthlySpendingArray = function(_array) {
                angular.forEach(_array, function(_obj, key) {
                    this.push( _obj.previous.toFixed(2) );
                }, _this.prevYearMonthlySpendingsArray);
            };

            _this.adjustModuleBottomPadding = function(){
                var _chartModule = angular.element(document).find('.chart-module');
                var _chartModuleInnerModule = _chartModule.find('.dashboard-module__module');
                var _callOut = _chartModuleInnerModule.find('.callout');

                _chartModuleInnerModule.css('padding-bottom', _callOut.outerHeight());
            };


            // Extend the default Number object with a formatMoney() method:
            // usage: someVar.formatMoney(decimalPlaces, symbol, thousandsSeparator, decimalSeparator)
            // defaults: (2, "$", ",", ".")
            Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
                places = !isNaN(places = Math.abs(places)) ? places : 2;
                symbol = symbol !== undefined ? symbol : "$";
                thousand = thousand || ",";
                decimal = decimal || ".";
                var number = this,
                    negative = number < 0 ? "-" : "",
                    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
                    j = (j = i.length) > 3 ? j % 3 : 0;
                return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
            };


            _this.emptyChart = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                data: [
                    [1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                series: [],
                colours: ['#FFFFFF'],
                lineWidth: 0,
                options: {
                    // Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: false,
                    // Boolean - Whether to fill the dataset with a colour
                    datasetFill: false,
                    //Number - Radius of each point dot in pixels
                    pointDotRadius : 0,
                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth : 0,
                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke : false,
                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius : 0,
                    // Interpolated JS string - can access value
                    scaleLabel: function (d) {
                        if (d.value == 0)
                            return d.value;
                        else
                            return parseInt(parseInt(d.value)) + 'K';
                    }
                }
            };



            // Charts stuff below, currently using chart.js for charts
            //
            // COLORS
            _this.colours = [
                '#3E53A4',
                '#0c76ba',
                '#009DBF',
                '#A03F9B',
                '#EF8200',
                '#00B140',
                '#EDB700',
                '#3E53A4'
            ];
            // LINE
            _this.line = {
                labels: _this.monthsLabelArray,
                data: [
                    _this.prevYearMonthlySpendingsArray,
                    _this.curYearMonthlySpendingsArray
                ],
                series: [
                    'Last Year',
                    'This Year'
                ],
                colours: _this.colours,
                options: {
                    /// Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: true,
                    // Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: false,
                    // Boolean - Whether to show labels on the scale
                    scaleShowLabels: true,
                    // Interpolated JS string - can access value
                    scaleLabel: function (d) {
                        if (d.value == 0)
                            return d.value;
                        else
                            return parseInt(parseInt(d.value).formatMoney(2,'','')) + 'K';
                    },
                    // Boolean - Whether the line is curved between points
                    bezierCurve: false,
                    // Boolean - Whether to fill the dataset with a colour
                    datasetFill: false,
                    // Number - Radius of each point dot in pixels
                    pointDotRadius : 6,
                    // Number - Pixel width of dataset stroke
                    datasetStrokeWidth : 4,
                    // Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,
                    // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius : 20,
                    customTooltips: function (tooltip) {
                        var tooltipEl = $('#chartjs-tooltip');
                        var monthLabel = '';

                        if (!tooltip) {
                            tooltipEl.css({
                                opacity: 0
                            });
                            return;
                        }

                        tooltipEl.removeClass('above below');
                        tooltipEl.addClass(tooltip.yAlign);

                        // Convert tooltip month label to full month name
                        //
                        switch(tooltip.title) {
                            case 'Jan':
                                monthLabel = 'January'; break;
                            case 'Feb':
                                monthLabel = 'February'; break;
                            case 'Mar':
                                monthLabel = 'March'; break;
                            case 'Apr':
                                monthLabel = 'April'; break;
                            case 'May':
                                monthLabel = 'May'; break;
                            case 'Jun':
                                monthLabel = 'June'; break;
                            case 'Jul':
                                monthLabel = 'July'; break;
                            case 'Aug':
                                monthLabel = 'August'; break;
                            case 'Sep':
                                monthLabel = 'September'; break;
                            case 'Oct':
                                monthLabel = 'October'; break;
                            case 'Nov':
                                monthLabel = 'November'; break;
                            case 'Dec':
                                monthLabel = 'December'; break;
                            default: break;
                        }

                        // split out the label and value and make your own tooltip here
                        var lastYear = tooltip.labels[0].split(":");
                        var thisYear = tooltip.labels[1].split(":");
                        var innerHtml = '<h3 class="nmt spacer-bottom-xs">' + monthLabel + '</h3><span>' + lastYear[0].trim() + '</span> : <span class="text-blue-500"><b>' + (parseInt(lastYear[1].trim()).formatMoney(2,'$','')) + '</b></span><br>';
                        var innerHtml2 = '<span>' + thisYear[0].trim() + '</span> : <span class="text-medium-blue-500"><b>' + (parseInt(thisYear[1].trim()).formatMoney(2,'$','')) + '</b></span>';
                        tooltipEl.html(innerHtml + innerHtml2);

                        tooltipEl.css({
                            opacity: 1,
                            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
                            top: tooltip.chart.canvas.offsetTop + (tooltip.y - (tooltipEl.outerHeight(true)/2)) + 'px',
                            fontFamily: tooltip.fontFamily,
                            fontSize: tooltip.fontSize,
                            fontStyle: tooltip.fontStyle
                        });
                    }
                }
            };

            _this.mobileClose = function($event) {
                $($event.currentTarget).parents('.dropdown').removeClass('open');
            };
        }

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-chart.html',
            controllerAs: 'chart',
            controller: controller,
            bindToController: {
                'moduleTitle': '@',
                'model': '='
            }
        };
    });

})();