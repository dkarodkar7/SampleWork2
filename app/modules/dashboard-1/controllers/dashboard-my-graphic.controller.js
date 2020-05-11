(function() {


    'use strict';

    angular.module('pb.dashboard').controller('MyGraphicCtrl',  ['$scope', 'MockDataFactory',
        function($scope, MockDataFactory) {

            $scope.confirm = false;
            var pipedValue;
            var serialNumber = "";
            var pcnNumber = "";
            var canSelected = "";


            $scope.next = function(form) {
                //  if(form.$valid) {
                //    $scope.confirm = true;
                //}
            };

            function validatePcnSn() {


                var len = document.pcnForm.check_list.length;

                if (len == undefined) {
                    if (document.pcnForm.check_list.checked) {
                        pipedValue = document.pcnForm.check_list.value;
                        pcnNumber += pipedValue.substring(0, pipedValue.indexOf("-"))
                            + ',';
                        serialNumber += pipedValue.substring(
                                pipedValue.indexOf("-") + 1, pipedValue
                                    .lastIndexOf("-"))
                            + ',';
                        canSelected = pipedValue.substring(
                                pipedValue.lastIndexOf("-") + 1, pipedValue.length - 1)
                            + ',';
                    }
                }
                for (var i = 0; i < len; i++) {
                    if (document.pcnForm.check_list[i].checked) {
                        pipedValue = document.pcnForm.check_list[i].value;
                        pcnNumber += pipedValue.substring(0, pipedValue.indexOf("-"))
                            + ',';
                        serialNumber += pipedValue.substring(
                                pipedValue.indexOf("-") + 1, pipedValue
                                    .lastIndexOf("-"))
                            + ',';
                        canSelected = pipedValue.substring(
                                pipedValue.lastIndexOf("-") + 1, pipedValue.length - 1)
                            + ',';
                    }
                }

                if (pcnNumber != "" && serialNumber != "" && canSelected != "") {
                    pcnNumber = pcnNumber.substring(0, (pcnNumber.length - 1));
                    serialNumber = serialNumber.substring(0, (serialNumber.length - 1));
                    canSelected = canSelected.substring(0, (canSelected.length - 1));
                    document.getElementById("CAN").value = canSelected;
                    document.getElementById("SN").value = serialNumber;
                    document.getElementById("PCN").value = pcnNumber;
                    document.frmToMS1.submit();
                } else {
                    window.scrollTo(0, 0);
                    $("#graphicErrorMessage").fadeIn(3000, function() {
                        $("#graphicErrorMessage").hide("slow");
                    });
                    document.getElementById('graphicErrorMessage').style.display = "block";
                }
            }

            function manageCheckBox() {
                var len = document.pcnForm.check_list.length;
                if (document.getElementById("SelectAll").checked) {
                    if (len == undefined) {
                        document.pcnForm.check_list.checked = true;
                    }
                    for (var i = 0; i < len; i++) {
                        document.pcnForm.check_list[i].checked = true;
                    }
                } else {
                    if (len == undefined) {
                        document.pcnForm.check_list.checked = false;
                    }
                    for (var i = 0; i < len; i++) {
                        document.pcnForm.check_list[i].checked = false;
                    }
                }
            }




        }]);

})();
