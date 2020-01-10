//TO DISPLAY CITY SELECTED
const displayCity = function(trgt) {
	let displayCity = document.querySelector('.display-city');
	displayCity.innerHTML = trgt;
};
//TO DISPLAY MONTH SELECTED
const displayMonth = function(trgt) {
	let displayMonth = document.querySelector('.display-month');
	displayMonth.textContent = trgt;
};
//TO DISPLAY DAYS AFTER SELECTING MONTH
const displayDays = function(id) {
	console.log(id);
	console.log(datesEl);
	while (datesEl.firstChild) {
		datesEl.removeChild(datesEl.firstChild);
	}
	let totalDays;
	switch (id) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			totalDays = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			totalDays = 30;
			break;
		case 2:
			totalDays = 28;
			break;
	}
	let dayEl;
	for (let i = 1; i <= totalDays; i++) {
		dayEl = document.createElement('a');
		dayEl.className = `day ${i}`;
		dayEl.innerHTML = `${i}`;
		datesEl.appendChild(dayEl);
	}
	setupDayListeners();
};

//SETUP EVENTLISTENERS FOR DAYS
const setupDayListeners = function() {
	let dayEl = document.querySelectorAll('.day');
	dayEl.forEach(function(item, index) {
		item.addEventListener('click', function(event) {
			console.log(`${event.target.textContent}`);
			displayDay(event.target.innerHTML);
		});
	});
};

//TO DISPLAY DAY SELECTED
const displayDay = function(trgt) {
	displayDayEl.innerHTML = trgt;
};
