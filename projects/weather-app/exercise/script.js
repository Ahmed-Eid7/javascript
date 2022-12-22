/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
let cityName = document.querySelector("#city-name");
let weatherType = document.querySelector("#weather-type");
let temp = document.querySelector("#temp");
let minTemp = document.querySelector("#min-temp");
let maxTemp = document.querySelector("#max-temp");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3cfe364db8msh611aa1331a5f64bp1546fbjsn040642f7256d",
    "X-RapidAPI-Host": "open-weather-map27.p.rapidapi.com",
  },
};

fetch(
  "https://open-weather-map27.p.rapidapi.com/weather?q=egypt&units=imperial",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
};
