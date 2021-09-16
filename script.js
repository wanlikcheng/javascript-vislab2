// TODO: load the dataset 

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
	let attractions;
	
	fetch('attractions.json')
	.then(response => response.json())
	.then(data => {
		attractions = data;
		console.log('Attractions: ', attractions);
		

		// sort attractions
		attractions.sort(function(a, b) {
			return parseFloat(b.Visitors) - parseFloat(a.Visitors);
		  });
		console.log("Sorted Attractions: ", attractions);
		
		let filtered = attractions;

		if(category &&  category != "all") {
			filtered = filtered.filter(function(row, index) {
				return row.Category == category;
			});
		}

		// slice attractions
		const firstFiveAttractions = filtered.slice(0, 5);
		console.log("Top 5 attractions by visitors: ", filtered);

		// render
		renderBarChart(firstFiveAttractions);
	});

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
var element = document.querySelector('#attraction-category');
filterData(element);
var display = filterData(element);
element.addEventListener('change', event => {
	// event.target.value
	console.log(event);
	console.log(event.target.value);
	filterData(event.target.value);
})
