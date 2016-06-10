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



function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation(),console.log("Getting Weather MINI!")}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}var weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ";
function weekdayToString(dayNumber, abbr){
  if(abbr == false){
    switch(dayNumber){
      case 0: 
        return "Sunday";
      case 1: 
        return "Monday";
      case 2: 
        return "Tuesday";
      case 3: 
        return "Wednesday";
      case 4: 
        return "Thursday";
      case 5: 
        return "Friday";
      case 6: 
        return "Saturday";
    }
  }else{
    switch(dayNumber){
      case 0: 
        return "Sun";
      case 1: 
        return "Mon";
      case 2: 
        return "Tue";
      case 3: 
        return "Wed";
      case 4: 
        return "Thur";
      case 5: 
        return "Fri";
      case 6: 
        return "Sat";
    } 
  }
}

function monthToString(monthNumber){
 switch(monthNumber){
  case 0:
    return "January"
  case 1:
    return "February"
  case 2:
    return "March"
  case 3:
    return "April" 
  case 4:
    return "May"
  case 5:
    return "June"
  case 6:
    return "July"
  case 7:
    return "August"
  case 8:
    return "September"
  case 9:
    return "October"
  case 10:
    return "November"
  case 11:
    return "December"
 } 
}

function hourToString(hourNumber){
  var time = new Date(hourNumber*1000);
  var hour = time.getHours();
  var hourString = "";

  if(hour > 12){
    hour = hour - 12;
    hourString = hour + " PM";
  }else{
    if(hour == 0){
      hour = 12;
    }
    hourString = hour + " AM";
  }

  return hourString;
}

function getWeatherIcon(icon){
  var iconDirectory = "/images/weather-icons/";
  var weatherIcons = {
    "clear-day":iconDirectory+"weather-clear-day.svg",
    "clear-night":iconDirectory+"weather-clear-night.svg",
    "rain":iconDirectory+"weather-rain.svg",
    "snow":iconDirectory+"weather-snow.svg",
    "sleet":iconDirectory+"weather-sleet.svg",
    "wind":iconDirectory+"weather-wind.svg",
    "fog":iconDirectory+"weather-fog.svg",
    "cloudy":iconDirectory+"weather-.svg",
    "partly-cloudy-day":iconDirectory+"weather-partly-cloudy-day.svg",
    "partly-cloudy-night":iconDirectory+"weather-partly-cloudy-night.svg",
    "thunderstorm":iconDirectory+"weather-thunderstorm.svg"
  };
  return weatherIcons[icon];
}

function getWindDirection(degrees){
  if(degrees > 11.25 && degrees < 33.75){
    return "NNE ";  
  }else if(degrees > 33.75 && degrees < 56.25){
    return "NE ";
  }else if(degrees > 56.25 && degrees < 78.75){
    return "ENE ";
  }else if(degrees > 78.75 && degrees < 101.25){
    return "E ";
  }else if(degrees > 101.25 && degrees < 123.75){
    return "ESE ";
  }else if(degrees > 123.75 && degrees < 146.25){
    return "SE ";
  }else if(degrees > 146.25 && degrees < 168.75){
    return "SSE ";
  }else if(degrees > 168.75 && degrees < 191.25){
    return "S ";
  }else if(degrees > 191.25 && degrees < 213.75){
    return "SSW ";
  }else if(degrees > 213.75 && degrees < 236.25){
    return "SW ";
  }else if(degrees > 236.25 && degrees < 258.75){
    return "WSW ";
  }else if(degrees > 258.75 && degrees < 281.25){
    return "W ";
  }else if(degrees > 281.25 && degrees < 303.75){
    return "WNW ";
  }else if(degrees > 303.75 && degrees < 326.25){
    return "NW ";
  }else if(degrees > 326.25 && degrees < 348.75){
    return "NNW ";
  }else{
    return "N ";
  }
}

function displayLocation(data){
  var cityData = data.address_components[0].long_name;
  var stateData = data.address_components[1].short_name;
  var location = ".location-row .location-and-date .location";
  $(location).html(cityData+', '+stateData);
}

function displayDate(){
  var date = new Date();
  var weekdayNum = date.getDay();
  var monthNum = date.getMonth();
  var day = date.getUTCDate();
  var weekday = weekdayToString(weekdayNum, false);
  var month = monthToString(monthNum);
  var dateTag = ".upper-half .location-row .location-and-date .date"
  //Show Date
  $(dateTag).html(weekday + ', ' + month +' ' + day);
}

function displayCurrentWeather(data){
  var section = ".upper-half .current-weather"
  //====Condensed====//
  //Show Current Weather Icon
  $(section+" .current-weather-icon").html("<img src = "+getWeatherIcon(data.icon)+">");
  //Show Current Temp
  $(section+" .current-temp").html(data.currentTemp+'°');
  //Show High Temp
  $(section+" .high-temp").html(data.highTemp+'°');
  //Show Low Temp
  $(section+" .low-temp").html(data.lowTemp+'°');
}

function displayDailyWeather(data){
  var day = "";
  var weatherRow = ".lower-half .lower-half-container .daily-weather-row";
  for(var i = 1; i<data.length; i++){
    //Show Day of Week
    day = weekdayToString(new Date(data[i].time*1000).getDay());
    $(weatherRow + " .day-"+i+" .daily-name").html(day, true);
    //Show Weather for Day
    $(weatherRow + " .day-"+i+" .daily-weather-icon").html(
      "<img src = "+getWeatherIcon(data[i].icon)+">"
    );
    //Show Day High
    $(weatherRow + " .day-"+i+" .day-temps .daily-high-temp").html(data[i].highTemp+"°");
    $(weatherRow + " .day-"+i+" .day-temps .daily-low-temp").html(data[i].lowTemp+"°");
    //Show Day Low
  }
}

function displayHourlyWeather(data){
  var hourRow = ".lower-half .lower-half-container .hourly-weather-row .hour";
  for(var i = 1; i < 13; i++){
    console.log(data);
    $(hourRow+" .hour-"+i+"-row .time").html(hourToString(data[i].time));
    $(hourRow+" .hour-"+i+"-row .temp").html(data[i].hourTemp+"°");
    $(hourRow+" .hour-"+i+"-row .precip").html(data[i].precipProb +" %");
    $(hourRow+" .hour-"+i+"-row .wind").html(getWindDirection(data[i].windDirection) + data[i].windSpeed + " MPH");
  }
}
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


