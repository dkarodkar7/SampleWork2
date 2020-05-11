(function() {
    'use strict';

    angular.module('pb.financial')
        .controller(
            'FinancialController', ['$log', '$scope', '$filter', '$location', '$rootScope', 'MockDataFactory', '$stateParams', 'moment',
            function($log, $scope, $filter, $location, $rootScope, MockDataFactory, $stateParams, moment) {

                // Tabs stuff
                $scope.tabs = [
                    {
                        link        : 'financial.purchasepower',
                        label       : 'Purchase Power',
                        currentTab  : '#purchase-power',
                        bootstrapClass: 'col-sm-3'
                    },
                    {
                        link        : 'financial.prepaidaccount',
                        label       : 'Prepaid Accounts',
                        currentTab  : '#prepaid-accounts',
                        bootstrapClass: 'col-sm-3'
                    },
                    {
                        link        : 'financial.permitPostage',
                        label       : 'Easy Permit Postage',
                        currentTab  : '#permit-postage',
                        externalLink: 'http://pitneybowes.com',
                        bootstrapClass: 'col-sm-3'
                    },
                    {
                        link        : 'financial.invoices',
                        label       : 'Invoices & Statements',
                        currentTab  : '#invoices',
                        externalLink: 'http://pitneybowes.com',
                        bootstrapClass: 'col-sm-3'
                    }
                ];

                var _isNotMobile = (function() {
                    var check = false;
                    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                    return !check;
                })();

                $rootScope.$on('$locationChangeSuccess', function(event){
                    var url = $location.url(),
                        params = $location.search();

                    // allows purchase power tab to be collapsed on
                    // mobile when visiting generic financial page
                    if (params.collapse && !_isNotMobile){
                        $scope.collapsePP = false;
                    }else if(!_isNotMobile){
                        $scope.collapsePP = true;
                    }

                    // to show single account example
                    if (params.singleAccount){
                        $scope.singleAccount = true;
                    } else {
                        $scope.singleAccount = false;
                    }


                });

                // switches title of dropdown to selected filter in detail pages
                $scope.switchFilterText = function($event, clickedText) {
                    if($event.currentTarget.className == "clear-button"){
                        $('.dropdown.date').find('button').find('.text').text(clickedText);
                    }else{
                        $($event.currentTarget).parents('.dropdown').removeClass('open').find('button').find('.text').text(clickedText);
                    }
                };

                // Working on global fix for links in dropdowns that require ng-click and there for break the dropdown toggle on touch devices
                $scope.mobileClose = function($event) {
                    $($event.currentTarget).parents('.dropdown').removeClass('open');
                };

                // set sortType to date on page load
                $scope.sortType = 'date';

                //
                $scope.dateRange = false;

                $scope.today = moment();
                $scope.CurrentMonth = moment().month();
                $scope.CurrentMonthText = moment().date(1).format('MM/DD/YYYY');
                $scope.PreviousMonth = moment().subtract(1, 'months').format('MM');
                $scope.PreviousMonthText = moment().subtract(1, 'months').date(1).format('MM/DD/YYYY');
                $scope.CurrentYear = moment().year();
                $scope.PrevMonthYear = moment().subtract(1, 'months').format('YYYY');

                $scope.filters = { };

                $scope.daterangepicker = {
                    date: {
                        startDate: moment().startOf('year'),
                        endDate: moment()
                    },
                    options: {
                        locale: {
                            format: 'MM/DD/YYYY'
                        },
                        maxDate: moment(),
                        autoApply: true,
                        eventHandlers: {
                            'apply.daterangepicker': function (startDate, endDate) {
                                alert("A new date range was chosen: " + moment(startDate).format('MM/DD/YYYY') + ' to ' + moment(endDate).format('MM/DD/YYYY') + '  will make call to E1 here');
                                //function(ev, picker) { }
                                $scope.filterStartDate = moment(startDate);
                                $scope.filterEndDate = moment(endDate);
                            }
                        }
                    }

                };

                $scope.checkMonthYear = function(currentMonthVar, currentYearVar ) {
                    $scope.currentMonthSet = currentMonthVar;
                    $scope.currentYearSet = currentYearVar;
                };

                $scope.setbyTransactionType = function(transaction) {
                    $scope.byTransactionTypeSet = transaction;
                };


                $scope.dueDateFormatter = function(i) {
                    // need to perform split on date that is formatted correctly and not just a string
                    i.activityDate = $filter('date')(new Date(i.activityDate), 'MM/dd/yyyy');

                    var dateParts = i.activityDate.split(/\//);

                    return dateParts[2]
                        + '-' + (dateParts[0] < 10 ? '0' + dateParts[0] : dateParts[0])
                        + '-' + (dateParts[1] < 10 ? '0' + dateParts[1] : dateParts[1]);
                };

                $scope.currencySortAmount = function(i) {
                    var amountNumber = parseInt(i.amount, 10);
                    return amountNumber;
                };

                $scope.currencySortBalance = function(i) {
                    var balanceNumber = parseInt(i.balance, 10);
                    return balanceNumber;
                };


    }]);

    // Custom Filters
    angular.module('pb.financial').filter('byTransactionTypeFilter', function() {
        return function (values, byTransactionTypeSet) {
            if (!byTransactionTypeSet) {
                // initially don't filter
                return values;
            }

            // filter when transaction type matches
            return values.filter(function (value) {

                if (byTransactionTypeSet === 'refMeter'){
                    return value.refMeter != undefined;
                } else if (byTransactionTypeSet === 'transfer') {
                    return value.transfer != undefined;;
                }

            })

        }
    });


    angular.module('pb.financial').filter('isCurrentMonthFilter', function(){
        return function(values, currentMonthSet) {

            if(!currentMonthSet) {
                // initially don't filter
                return values;
            }

            // filter when we have a matching month
            return values.filter(function (value) {
                var dateParts = value.activityDate.split(/\//);
                return parseInt(dateParts[0]) === parseInt(currentMonthSet);
            });

        }
    });

    angular.module('pb.financial').filter('isCurrentYearFilter', ['$timeout', function($timeout){
        return function(values, currentYearSet) {

            if(!currentYearSet) {
                // initially don't filter
                return values;
            }

            // filter when we have a matching year
            return values.filter(function (value) {

                var dateParts = value.activityDate.split(/\//);
                return parseInt(dateParts[2]) === parseInt(currentYearSet);
            });


        }
    }]);

})();
