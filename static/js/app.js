// from data.js 
var tableData = data;

//Select my tbocy
var tbody = d3.select("tbody");


// Data dump to website
tableData.forEach(ufoData => {
	var row = tbody.append("tr");
	Object.entries(ufoData).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
	});
});