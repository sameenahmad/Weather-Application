var tempValue = document.getElementById("tempValue");
var minTemp = document.querySelector(".minTemp");
var maxTemp = document.querySelector(".maxTemp");
var weatherDescription = document.getElementById("weatherDescription");
var weatherIcon = document.getElementById("weatherIcon");
var celcius = document.getElementById("celcius");
var kelvin = document.getElementById("kelvin");
var fahrenheit = document.getElementById("fahrenheit");

function getUnit() {
  unit = "metric";
  celcius.addEventListener("click", () => {
    unit = "metric";
    getTemp();
  });
  kelvin.addEventListener("click", () => {
    unit = "";
    getTemp();
  });
  fahrenheit.addEventListener("click", () => {
    unit = "imperial";
    getTemp();
  });
  return unit;
}

function getTemp() {
  var location = document.getElementById("searchValue").value;
  updateTemp(location);
}
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var unit = getUnit();
var appid = "&appid=1b9eec515d18cf2e35e977219ce02cc4";

function updateTemp(location) {
  fetch(api + location + "&units=" + unit + appid)
    .then(res => res.json())
    .then(data => {
      tempValue.innerHTML = data.main.temp;
      minTemp.innerHTML = data.main.temp_min;
      maxTemp.innerHTML = data.main.temp_max;
      weatherDescription.innerHTML = data.weather[0].description;
      var icon = data.weather[0].description;
      switch (icon) {
        case "haze":
          {
            weatherIcon.src = "/images/haze.png";
          }
          break;
        case "clear sky":
          {
            weatherIcon.src = "/images/clearsky.svg";
          }
          break;
        case "overcast clouds":
          {
            weatherIcon.src = "/images/overcastclouds.png";
          }
          break;
        case "broken clouds":
          {
            weatherIcon.src = "/images/brokenclouds.png";
          }
          break;
        default: {
          weatherIcon.src = "/images/default.gif";
        }
      }
    })
    .catch(() => console.log("OOOPS!!LOCATION NOT FOUND"));
}

