(function() {

    angular.module('app').directive('pbBarChart', function() {

        function controller($scope, $rootScope, $element, MockDataFactory) {

            $scope.meterSerialNumber = [{"msn": "011223"},{"msn": "022334"}];



            $scope.getMeterUsageReport = function( _msnNum ) {

            $scope.model = MockDataFactory.get({ filename: 'meter_usage_report_' + _msnNum });

            $scope.model.$promise.then(function (_data) {

                var objData = _data;
                 var series = [];
                categories = [];
                var key = [];
                //var newDate = dateFormat(key, "mm/dd/yy");
               // alert(newDate);

               // var key = key.getDate(key);

                for (key in objData) {

                    var obj = objData[key];

                    categories.push(key);

                    for (var item in obj) {
                        var targetSeries;
                        var bFound = false;
                        for (var i = 0; i < series.length; i++) {
                            if (item == series[i].name) {
                                bFound = true;
                                targetSeries = series[i];
                            }
                        }
                        if (!bFound) {
                            targetSeries = {'name': item, 'data': []};
                            series.push(targetSeries);
                        }
                        var val = obj[item]
                        targetSeries.data.push(val);
                    }

                }

           //     console.log(series);
             //   console.log(categories);

                $('#container').highcharts({
                    chart: {
                        type: 'column'
                    },
                    xAxis: {
                        categories: categories
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: null
                        },
                    },
                    tooltip: {
                        headerFormat: '<h5>{point.key}</h5><table>',
                        pointFormat: '<tr><td style="color:{#4e4e4e};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true,
                        border:0
                    },

                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#000',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                     //   y: 10, // 10 pixels down from the top
                        style: {
                            //  fontSize: '13px',
                            //fontFamily: 'Verdana, sans-serif'
                        }
                        },
                    plotOptions: {
                        column: {
                            pointWidth:15
                           // pointPadding: 0.2,
                            //borderWidth: 10,
                        }
                    },

                    series: series,
                    color: '#cf0989'
                   });
            })
                }}
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'modules/dashboard/templates/dashboard-module-bar-chart.html',
            controllerAs: 'barchart',
            controller: controller,
            bindToController: {
                'moduleTitle': '@',
                'model': '='
            }


        };
    });

})();