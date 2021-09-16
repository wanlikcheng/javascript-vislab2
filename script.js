// TODO: load the dataset 

let attractions;
	
fetch('attractions.json')
.then(response => response.json())
.then(data => {
	attractions = data;
	console.log('Attractions: ', attractions);
});

function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
		renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
		
	// sort attractions
	let filtered = attractions;

	filtered.sort(function(a, b) {
		return parseFloat(b.Visitors) - parseFloat(a.Visitors);
	});
	console.log("Sorted Attractions: ", filtered);
	
	// filter attractions by category
	if(category &&  category != "all") {
		filtered = filtered.filter(function(row, index) {
			return row.Category == category;
		});
	}

	// slice attractions
	const firstFiveAttractions = filtered.slice(0, 5);
	console.log("Top 5 attractions by visitors: ", firstFiveAttractions);

	// render
	renderBarChart(firstFiveAttractions);	

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

var element = document.querySelector('#attraction-category');

element.addEventListener('change', event => {
	console.log(event);
	console.log(event.target.value);
	filterData(event.target.value);
})