function dateFormat(event) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[event.getDay()];
  let hour = event.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = event.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let dateNow = `${day}  ${hour}:${minute}`;

  return dateNow;
}
let eventElement = document.querySelector("#date");
let currentTime = new Date();
eventElement.innerHTML = dateFormat(currentTime);

function Weather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(city) {
  let apiKey = "056ff5c21ea93f2f14b864eb4f4a37a4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(Weather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function button(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

function searchLocation(position) {
  let apiKey = "056ff5c21ea93f2f14b864eb4f4a37a4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(Weather);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 76;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 26;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", button);
