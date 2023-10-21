const fs = require("fs");
const XLSX = require("xlsx");
const _ = require("lodash");

const workbook = XLSX.readFile("your-excel-file.xlsx");

// Assuming you want to work with the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Parse the Excel data into a JSON object
const data = XLSX.utils.sheet_to_json(worksheet);

// Define the row number to check for duplicates
const rowToCheck = 2; // Change this to the row number you want to check

// Find and eliminate duplicates in the specified row
const uniqueData = _.uniqBy(data, (row) => row["ColumnHeaderName"]); // Change 'ColumnHeaderName' to the actual column name

// Create a new worksheet with the unique data
const newWorksheet = XLSX.utils.json_to_sheet(uniqueData);

// Create a new workbook with the new worksheet
const newWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, sheetName);

// Save the new workbook to a file
XLSX.writeFile(newWorkbook, "output.xlsx");

console.log('Duplicates removed and saved to "output.xlsx".');

// Optionally, you can delete the original file if needed
// fs.unlinkSync('your-excel-file.xlsx');
