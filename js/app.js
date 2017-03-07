// blah
//import * as XlsxPopulate from 'xlsx-populate';

var app = angular.module("XlsxApp", []);

app.controller("MainController", function($scope){
    //var XlsxPopulate = require('xlsx-populate');

    
    $scope.populate = function() {
        console.log("running populate...");

            XlsxPopulate.fromFileAsync("./Travel_Authority_Form.xlsx")
            .then(workbook => {
                // Modify the workbook. 
                workbook.sheet("Travel Authority & Advance").cell("D6").value("This is neat!");
        
                // Write to file. 
                return workbook.toFileAsync("./output.xlsx");
            });
    };
});