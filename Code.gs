function doGet(e) {
  
  Logger.log(e.parameter);
  return HtmlService.createTemplateFromFile('index').evaluate();
      
}

function include(File) {
  return HtmlService.createHtmlOutputFromFile(File).getContent();
};
function getTasks() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var tasks = [];
  var dayTasks = [];
  var sheets = ss.getSheets();
  for (var sheetIndex = 0; sheetIndex < sheets.length; sheetIndex++) {
    var sheet = sheets[sheetIndex];
    var range = sheet.getDataRange();
    var values = range.getValues();
    dayTasks = [];
    for (var i = 0; i < values.length; i++) {
     
      dayTasks.push(values[i][0]); //add the tasks from this sheet into the array
     
    }
    tasks.push(dayTasks);
  }

  console.log(tasks);
  return tasks;
}
function saveTask(day, plan) {
  // Save the task in the relevant sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheet;
  
  if (day === "monday") {
    sheet = sheets[0];
  } else if (day === "tuesday") {
    sheet = sheets[1];
  } else if (day === "wednesday") {
    sheet = sheets[2];
  } else if (day === "thursday") {
    sheet = sheets[3];
  } else if (day === "friday") {
    sheet = sheets[4];
  } else if (day === "saturday") {
    sheet = sheets[3];
  } else if (day === "sunday") {
    sheet = sheets[3];
  }
  
  
  var range = sheet.getDataRange();
  range.clear(); // Clear the current range
  sheet.setActiveSelection("A1");

  var data = plan.split(",");
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    sheet.appendRow([data[i]]);
  }
}

function onSubmit() {
  var day = document.getElementById("day").value; // Get the day from the textbox
  var plan = document.getElementById("plan").value; // Get the data from the textbox

  saveTask(day, plan); // Call the saveTask function and pass the day and data

  // Perform any other actions or display a success message
}








// function getTasks() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   // const sheet = ss.getSheetByName('Tue');
  
//   const sheet = ss.getSheets()[6];
//   var range = sheet.getRange("A1:A3").getValues();
//   console.log(range); 
//   return range;
