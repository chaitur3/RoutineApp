function Test() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B5').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Tue'), true);
  spreadsheet.getRange('A1:A3').activate();
};