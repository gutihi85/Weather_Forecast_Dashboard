var tableBody = document.getElementById("repo-table");
var fetchButton = document.getElementById("fetch-button");

var cityName = "cleveland"; // at some point you'll get this from the UI
var weatherApiKey = "79a9da340c3448812ae295eed821a1af";

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  // first we call to get the coords of the city
  var coordinateRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${weatherApiKey}`;
  // use those coords to get the weather info

  fetch(coordinateRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // sanity check
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;

      var weatherRequestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${weatherApiKey}`;

      fetch(weatherRequestUrl)
        .then(function (response2) {
          return response2.json();
        })
        .then(function (weatherData) {
          // sanity check
          console.log(weatherData);
          console.log(localStorage.getItem(weatherData, "current"));
        });

        // console.log(localStorage.getItem("current", "sunrise"));

    
    });
}

getApi();

