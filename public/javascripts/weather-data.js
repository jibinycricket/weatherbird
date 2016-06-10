var weatherAPIKEY = "2ebc8b5047823a6fbe879e5bc62a4462";
var revGeoAPIKEY = "AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ";

//Trigger
function getWeather(){
  getGeoLocation();
  console.log('Getting Weather');
}
//Get Current Location Data
function getGeoLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    alert("Geolocation isnt supported");
  }
}

//Get Latitude and Longitude
function showPosition(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  getWeatherURL(latitude, longitude);
  getReverseLocationURL(latitude, longitude);
}

//Get URL for Google Reverse Geocoding Call
function getReverseLocationURL(lat, long){
  var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=" + revGeoAPIKEY;
  getReverseLocationJSON(url);
}

//Get JSON data from Google Reverse Geocoding API
function getReverseLocationJSON(url){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: url,
    success: function(data){
      displayLocation(data.results[2]);
      displayDate();
    }
  });
}

//Get URL for Forecast.io API Call
function getWeatherURL(lat,long){
  var url = "https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+lat+","+long;
  getWeatherJSON(url);
}

//Get JSON data from Forecast.io API
function getWeatherJSON(url){
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: url,
    success: function(data){
      var currentWeatherArray = currentWeatherData(data);
      var weekWeatherArray = weekWeatherData(data);
      var hourlyWeatherArray = hourlyWeatherData(data);

      displayCurrentWeather(currentWeatherArray);
      displayDailyWeather(weekWeatherArray);
      displayHourlyWeather(hourlyWeatherArray);
    }
  });
}

function currentWeatherData(data){
  var currentData = {};
  currentData.icon = data.currently.icon;
  currentData.currentTemp = Math.round(data.currently.apparentTemperature);
  currentData.highTemp = Math.round(data.daily.data[0].apparentTemperatureMax);
  currentData.lowTemp = Math.round(data.daily.data[0].apparentTemperatureMin);
  currentData.windSpeed = data.currently.windSpeed;
  currentData.windDirection = data.currently.windBearing;
  currentData.humidity = data.currently.humidity;
  currentData.pressure = data.currently.pressure;
  currentData.visibility = data.currently.visibility;

  return currentData;
}

function hourlyWeatherData(data){
  var hourlyData = [];
  for(var i = 0; i< 49; i++){
    hourlyData[i] = {};
    hourlyData[i].time = data.hourly.data[i].time;
    hourlyData[i].hourTemp = Math.round(data.hourly.data[i].apparentTemperature);
    hourlyData[i].precipProb = data.hourly.data[i].precipProbability;
    hourlyData[i].windSpeed = data.hourly.data[i].windSpeed;
    hourlyData[i].windDirection = data.hourly.data[i].windBearing;
    console.log(hourlyData[i].windDirection);
  }

  return hourlyData;
}

function weekWeatherData(data){
  var weekData = [];
  for(var i = 1; i<8; i++){
    weekData[i] = {};
    weekData[i].time = data.daily.data[i].time;
    weekData[i].icon = data.daily.data[i].icon;
    weekData[i].highTemp = Math.round(data.daily.data[i].apparentTemperatureMax);
    weekData[i].lowTemp = Math.round(data.daily.data[i].apparentTemperatureMin);
  }

  return weekData;
}


