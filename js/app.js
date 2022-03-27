// QUOTE GENERATOR
const refreshButton = document.querySelector('.refresh');
const quote = document.querySelector('.quote-text');
const quoter = document.querySelector('.quoter');

refreshButton.addEventListener('click', getQuote);

function getQuote() {
	fetch('https://api.quotable.io/random')
		.then((response) => response.json())
		.then((data) => {
			quote.innerHTML = data.content;
			quoter.innerHTML = data.author;
		});
}

// Timezone
const city = document.querySelector('.city');
const country = document.querySelector('.country');
// Fetching and appending the users location and city
function getUserInfo() {
	fetch('https://freegeoip.app/json/')
		.then((response) => response.json())
		.then((data) => {
			city.innerHTML = data.city;
			country.innerHTML = data.region_name;
		})
		.catch((error) => console.log('Something went wrong getting quotes'));
}

// Get the current time
function getTime() {
	const date = document.querySelector('.date');
	let today = new Date();
	let hour = today.getHours();
	let minutes = today.getMinutes();
	var time = hour + ':' + minutes;

	console.log(time);

	if (minutes < 10) {
		date.innerHTML = `${hour}:0${minutes}`;
	} else {
		date.innerText = `${hour}:${minutes}`;
	}

	date.innerHTML = time;

	const greeting = document.querySelector('.greeting');

	if (hour >= 5 && hour <= 11) {
		console.log(hour);
		greeting.innerText = 'Good Morning';
	} else if (hour >= 12 && hour <= 18) {
		greeting.innerText = 'Good Afternoon';
	} else {
		greeting.innerText = 'Good Evening';
	}

	if (hour >= 5 || hour <= 18) {
		icon.src = 'assets/desktop/icon-moon.svg';
		document.body.classList.add('night');
		details.classList.add('day');
		dynamicText.classList.add('night');
		details.classList.add('night');
	} else {
		icon.src = 'assets/desktop/icon-sun.svg';
		document.body.classList.add('day');
		details.classList.add('night');
		dynamicText.classList.add('day');
		details.classList.add('day');
	}
}

const icon = document.querySelector('.icon');
const sun = document.querySelector('.sun');
const bg = document.querySelector('.bg');
const details = document.querySelector('.details');
const dynamicText = document.querySelector('.dynamic-text');

// Get the current time info
const timeZone = document.querySelector('.timezone');
const bst = document.querySelector('.bst');
const dayOfWeek = document.querySelector('.day-of-week');
const dayOfYear = document.querySelector('.day-of-year');
const weekOfNumber = document.querySelector('.week-number');

// Fetching and appending the time info
function getMore() {
	fetch('http://worldtimeapi.org/api/ip')
		.then((response) => response.json())
		.then((data) => {
			timeZone.innerHTML = data.timezone;
			bst.innerHTML = data.abbreviation;
			dayOfWeek.innerHTML = data.day_of_week;
			dayOfYear.innerHTML = data.day_of_year;
			weekOfNumber.innerHTML = data.week_number;
		})
		.catch((error) => console.log('Something went wrong with the time response'));
}

const button = document.querySelector('.button');
const buttonText = document.querySelector('.button--text');
const body = document.querySelector('.something');
const active = document.getElementsByClassName('active');
const transform = document.getElementsByClassName('transform');

button.addEventListener('click', clicker);

function clicker() {
	details.classList.toggle('active');
	body.classList.toggle('transform');
	if (buttonText.innerHTML === 'LESS') {
		buttonText.innerHTML = 'MORE';
		button.classList.remove('arrow-up');
		button.classList.add('arrow-down');
	} else {
		buttonText.innerHTML = 'LESS';
		button.classList.add('arrow-up');
		button.classList.remove('arrow-down');
	}
}

// Run functions
getTime();
getUserInfo();
getMore();
