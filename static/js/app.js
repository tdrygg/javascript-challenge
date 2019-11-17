// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a referance to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data from data.js
console.log(tableData);

// Append 1 table row `tr` for each object in `tableData`
// Use arrow functions `=>` to refactor `console.log(tableData)`
data.forEach((tableData) => {
    var row = tbody.append("tr");

    // Append 1 cell for each tableData value
    // Update each cell's text with tableData values 
    Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredTableData = tableData.filter(date => date.value === inputValue);

  console.log(filteredTableData);
});
});