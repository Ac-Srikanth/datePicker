let citiesEl = document.querySelector('.cities');
let monthsEl = document.querySelector('.months');
let datesEl = document.querySelector('.dates');
let displayDayEl = document.getElementById('display-day');
let months, cities;

const getdata = function() {
	let myRequest = new Request('src/assets/Json/date.json');
	fetch(myRequest)
		.then(function(resp) {
			return resp.json();
		})
		.then(function(data) {
			months = data.months;
			cities = data.cities;
			// console.log(months);
			// console.log(cities);
			generateMonths();
			generateCities();
			setupListeners();
		});
};

getdata();
