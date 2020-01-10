//GENERATE MONTHS
const generateMonths = function() {
	months.forEach(function(item, index) {
		let monthEl = document.createElement('div');
		monthEl.className = 'monthEl';
		monthEl.innerHTML = `<a class="month ${item}-${index + 1}" id="${index + 1}" href="#">${item}</a>`;
		monthsEl.appendChild(monthEl);
	});
};

//GENERATE CITIES
const generateCities = function() {
	cities.forEach(function(item, index) {
		let cityEl = document.createElement('div');
		cityEl.className = 'cityEl';
		cityEl.innerHTML = `<a class="city" id="${index}" href="#">${item}</a>`;
		citiesEl.appendChild(cityEl);
	});
};

//SETTING UP EVENT LISTENERS FOR CITIES AND MONTHS
const setupListeners = function() {
	// citiesEl.addEventListener('click');
	let city = document.querySelectorAll('.city');
	let month = document.querySelectorAll('.month');
	city.forEach(function(item, index) {
		// console.log(item);
		item.addEventListener('click', function(event) {
			//alert(event.target.innerHTML);
			displayCity(event.target.innerHTML);
		});
	});
	month.forEach(function(item, index) {
		item.addEventListener('click', function(event) {
			displayMonth(event.target.innerHTML);
			displayDays(parseInt(item.id));
		});
	});
};
