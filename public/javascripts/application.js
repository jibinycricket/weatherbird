var weatherAPIKEY = "2ebc8b5047823a6fbe879e5bc62a4462";
var revGeoAPIKEY = "AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ";

//Trigger
function getWeather(){
  getGeoLocation();
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
    }
  });
}

function currentWeatherData(data){
  var currentData = {};
  currentData.icon = data.currently.icon;
  currentData.currentTemp = data.currently.apparentTemperature;
  currentData.highTemp = data.daily.data[0].apparentTemperatureMax;
  currentData.lowTemp = data.daily.data[0].apparentTemperatureMin;
  currentData.windSpeed = data.currently.windSpeed;
  currentData.windDirection = data.currently.windBearing;
  currentData.humidity = data.currently.humidity;
  currentData.pressure = data.currently.pressure;
  currentData.visibility = data.currently.visibility;
}

function hourlyWeatherData(data){
  var hourlyData = [];
  for(var i = 0; i< 49; i++){
    hourlyData[i] = {};
    hourlyData[i].time = data.hourly.data[i].time;
    hourlyData[i].hourTemp = data.hourly.data[i].apparentTemperature;
    hourlyData[i].precipProb = data.hourly.data[i].precipProbability;
    hourlyData[i].windSpeed = data.hourly.data[i].windSpeed;
    hourlyData[i].windDirection = data.hourly.data[i].windDirection;
  }
}

function weekWeatherData(data){
  var weekData = [];
  for(var i = 1; i<8; i++){
    weekData[i] = {};
    weekData[i].icon = data.daily.data[i].icon;
    weekData[i].highTemp = data.daily.data[i].apparentTemperatureMax;
    weekData[i].lowTemp = data.daily.data[i].apparentTemperatureMin;
  }
}



var weatherAPIKEY = "2ebc8b5047823a6fbe879e5bc62a4462";
var revGeoAPIKEY = "AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ";

//Trigger
function getWeather(){
  getGeoLocation();
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
    }
  });
}

function currentWeatherData(data){
  var currentData = {};
  currentData.icon = data.currently.icon;
  currentData.currentTemp = data.currently.apparentTemperature;
  currentData.highTemp = data.daily.data[0].apparentTemperatureMax;
  currentData.lowTemp = data.daily.data[0].apparentTemperatureMin;
  currentData.windSpeed = data.currently.windSpeed;
  currentData.windDirection = data.currently.windBearing;
  currentData.humidity = data.currently.humidity;
  currentData.pressure = data.currently.pressure;
  currentData.visibility = data.currently.visibility;
}

function hourlyWeatherData(data){
  var hourlyData = [];
  for(var i = 0; i< 49; i++){
    hourlyData[i] = {};
    hourlyData[i].time = data.hourly.data[i].time;
    hourlyData[i].hourTemp = data.hourly.data[i].apparentTemperature;
    hourlyData[i].precipProb = data.hourly.data[i].precipProbability;
    hourlyData[i].windSpeed = data.hourly.data[i].windSpeed;
    hourlyData[i].windDirection = data.hourly.data[i].windDirection;
  }
}

function weekWeatherData(data){
  var weekData = [];
  for(var i = 1; i<8; i++){
    weekData[i] = {};
    weekData[i].icon = data.daily.data[i].icon;
    weekData[i].highTemp = data.daily.data[i].apparentTemperatureMax;
    weekData[i].lowTemp = data.daily.data[i].apparentTemperatureMin;
  }
}



function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}var weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ";
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
    }
  });
}

function currentWeatherData(data){
  var currentData = {};
  currentData.icon = data.currently.icon;
  currentData.currentTemp = data.currently.apparentTemperature;
  currentData.highTemp = data.daily.data[0].apparentTemperatureMax;
  currentData.lowTemp = data.daily.data[0].apparentTemperatureMin;
  currentData.windSpeed = data.currently.windSpeed;
  currentData.windDirection = data.currently.windBearing;
  currentData.humidity = data.currently.humidity;
  currentData.pressure = data.currently.pressure;
  currentData.visibility = data.currently.visibility;
}

function hourlyWeatherData(data){
  var hourlyData = [];
  for(var i = 0; i< 49; i++){
    hourlyData[i] = {};
    hourlyData[i].time = data.hourly.data[i].time;
    hourlyData[i].hourTemp = data.hourly.data[i].apparentTemperature;
    hourlyData[i].precipProb = data.hourly.data[i].precipProbability;
    hourlyData[i].windSpeed = data.hourly.data[i].windSpeed;
    hourlyData[i].windDirection = data.hourly.data[i].windDirection;
  }
}

function weekWeatherData(data){
  var weekData = [];
  for(var i = 1; i<8; i++){
    weekData[i] = {};
    weekData[i].icon = data.daily.data[i].icon;
    weekData[i].highTemp = data.daily.data[i].apparentTemperatureMax;
    weekData[i].lowTemp = data.daily.data[i].apparentTemperatureMin;
  }
}


