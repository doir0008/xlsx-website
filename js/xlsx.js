// TODO: Write functionality to connect to Firebase, grab data from database
// and use it to populate the spreadsheet

function xlsxpopulate() {
    console.log("running populate...");
    XlsxPopulate.fromFileAsync("./Travel_Authority_Form.xlsx")
    .then(workbook => {
        // Modify the workbook. 
        workbook.sheet("Travel Authority & Advance").cell("D6").value("This is neat!");

        // Write to file. 
        return workbook.toFileAsync("./output.xlsx");
    });
}

