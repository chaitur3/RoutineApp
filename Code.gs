function doGet(e) {
  // Log the parameters from the request
  Logger.log(e.parameter);

  // Create and evaluate the HTML template from 'index' file
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(File) {
  // Include and return content from specified HTML file
  return HtmlService.createHtmlOutputFromFile(File).getContent();
}

function getTasks() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var tasks = [];
  var dayTasks = [];
  var sheets = ss.getSheets();

  // Loop through each sheet to collect tasks
  for (var sheetIndex = 0; sheetIndex < sheets.length; sheetIndex++) {
    var sheet = sheets[sheetIndex];
    var range = sheet.getDataRange();
    var values = range.getValues();
    dayTasks = [];

    // Loop through each row to collect tasks for the day
    for (var i = 0; i < values.length; i++) {
      dayTasks.push(values[i][0]); // Add the tasks from this sheet into the array
    }
    tasks.push(dayTasks);
  }

  // Log tasks and return the collected data
  console.log(tasks);
  return tasks;
}

function saveTask(day, plan) {
  // Save the task in the relevant sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheet;

  // Identify the correct sheet based on the selected day
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
    sheet = sheets[5];
  } else if (day === "sunday") {
    sheet = sheets[6];
  }

  var range = sheet.getDataRange();
  range.clear(); // Clear the current range
  sheet.setActiveSelection("A1");

  // Split the plan into individual tasks
  var data = plan.split(",");
  console.log(data);

  // Append each task to the sheet
  for (var i = 0; i < data.length; i++) {
    sheet.appendRow([data[i]]);
  }
}

function onSubmit() {
  // Get the day and plan data from the form inputs
  var day = document.getElementById("day").value;
  var plan = document.getElementById("plan").value;

  // Call the saveTask function and pass the day and plan
  saveTask(day, plan);

  // Perform any additional actions or display success message
}

// Additional function getTasks() is commented out
// Uncomment and customize if needed
