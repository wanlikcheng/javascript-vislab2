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

		// slice attractions
		const firstFiveAttractions = attractions.slice(0, 5);
		console.log("Top 5 attractions by visitors: ", firstFiveAttractions);
		renderBarChart(firstFiveAttractions);

		// render
		renderBarChart(firstFiveAttractions);
	});

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let element = document.querySelector('#attraction-category');
element.addEventListener('change', filterData(element), false);
document.getElementById('attraction-category').onchange = (function (event) {
	alert("The event is: " + "on" + event.type);
	filterData(element);
});