// from data.js 
var tableData = data;

//No search results
var noSearch = d3.select("#no-search");
 
//Select my tbocy
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#ja");

// Create event handlers 
button.on("click", runSearch);
form.on("submit",runSearch);


function runSearch() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //forece date to string to make filtering easier
  inputDate = inputValue.toString();
 
  // Filtering data
  var filteredData = tableData.filter(selectDate => selectDate.datetime === inputDate);
  
  console.log(filteredData);
  

  if (filteredData.length === 0) {
  	// Clear all rows so no continued stack of data is evident
  	d3.selectAll("tr").remove();
  	noSearch.text("No search reults with that data were found")
  }
  else {
	// Clear all rows so no continued stack of data is evident
	d3.selectAll("tr").remove();

	//Filtered Data dump to website
	filteredData.forEach(ufoData => {
		var row = tbody.append("tr");
		Object.entries(ufoData).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
	noSearch.text("")
  }
//End of function
};

