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



function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation(),console.log("Getting Weather")}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation()}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function getWeather(){getGeoLocation(),console.log("Getting Weather MINI!")}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){currentWeatherData(e),weekWeatherData(e),hourlyWeatherData(e)}})}function currentWeatherData(e){var t={};t.icon=e.currently.icon,t.currentTemp=e.currently.apparentTemperature,t.highTemp=e.daily.data[0].apparentTemperatureMax,t.lowTemp=e.daily.data[0].apparentTemperatureMin,t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=e.hourly.data[a].apparentTemperature,t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windDirection}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].icon=e.daily.data[a].icon,t[a].highTemp=e.daily.data[a].apparentTemperatureMax,t[a].lowTemp=e.daily.data[a].apparentTemperatureMin}function weekdayToString(e,t){if(0==t)switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday"}else switch(e){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thur";case 5:return"Fri";case 6:return"Sat"}}function monthToString(e){switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}}function hourToString(e){var t=new Date(1e3*e),a=t.getHours(),r="";return a>12?(a-=12,r=a+" PM"):(0==a&&(a=12),r=a+" AM"),r}function getWeatherIcon(e){var t="/images/weather-icons/",a={"clear-day":t+"weather-clear-day.svg","clear-night":t+"weather-clear-night.svg",rain:t+"weather-rain.svg",snow:t+"weather-snow.svg",sleet:t+"weather-sleet.svg",wind:t+"weather-wind.svg",fog:t+"weather-fog.svg",cloudy:t+"weather-.svg","partly-cloudy-day":t+"weather-partly-cloudy-day.svg","partly-cloudy-night":t+"weather-partly-cloudy-night.svg",thunderstorm:t+"weather-thunderstorm.svg"};return a[e]}function getWindDirection(e){return e>11.25&&33.75>e?"NNE ":e>33.75&&56.25>e?"NE ":e>56.25&&78.75>e?"ENE ":e>78.75&&101.25>e?"E ":e>101.25&&123.75>e?"ESE ":e>123.75&&146.25>e?"SE ":e>146.25&&168.75>e?"SSE ":e>168.75&&191.25>e?"S ":e>191.25&&213.75>e?"SSW ":e>213.75&&236.25>e?"SW ":e>236.25&&258.75>e?"WSW ":e>258.75&&281.25>e?"W ":e>281.25&&303.75>e?"WNW ":e>303.75&&326.25>e?"NW ":e>326.25&&348.75>e?"NNW ":"N "}function displayLocation(e){var t=e.address_components[0].long_name,a=e.address_components[1].short_name,r=".location-row .location-and-date .location";$(r).html(t+", "+a)}function displayDate(){var e=new Date,t=e.getDay(),a=e.getMonth(),r=e.getUTCDate(),o=weekdayToString(t,!1),n=monthToString(a),i=".upper-half .location-row .location-and-date .date";$(i).html(o+", "+n+" "+r)}function displayCurrentWeather(e){var t=".upper-half .current-weather";$(t+" .current-weather-icon").html("<img src = "+getWeatherIcon(e.icon)+">"),$(t+" .current-temp").html(e.currentTemp+"°"),$(t+" .high-temp").html(e.highTemp+"°"),$(t+" .low-temp").html(e.lowTemp+"°")}function displayDailyWeather(e){for(var t="",a=".lower-half .lower-half-container .daily-weather-row",r=1;r<e.length;r++)t=weekdayToString(new Date(1e3*e[r].time).getDay()),$(a+" .day-"+r+" .daily-name").html(t,!0),$(a+" .day-"+r+" .daily-weather-icon").html("<img src = "+getWeatherIcon(e[r].icon)+">"),$(a+" .day-"+r+" .day-temps .daily-high-temp").html(e[r].highTemp+"°"),$(a+" .day-"+r+" .day-temps .daily-low-temp").html(e[r].lowTemp+"°")}function displayHourlyWeather(e){for(var t=".lower-half .lower-half-container .hourly-weather-row .hour",a=1;13>a;a++)console.log(e),$(t+" .hour-"+a+"-row .time").html(hourToString(e[a].time)),$(t+" .hour-"+a+"-row .temp").html(e[a].hourTemp+"°"),$(t+" .hour-"+a+"-row .precip").html(e[a].precipProb+" %"),$(t+" .hour-"+a+"-row .wind").html(getWindDirection(e[a].windDirection)+e[a].windSpeed+" MPH")}function getWeather(){getGeoLocation(),console.log("Getting Weather")}function getGeoLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):alert("Geolocation isnt supported")}function showPosition(e){var t=e.coords.latitude,a=e.coords.longitude;getWeatherURL(t,a),getReverseLocationURL(t,a)}function getReverseLocationURL(e,t){var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+revGeoAPIKEY;getReverseLocationJSON(a)}function getReverseLocationJSON(e){$.ajax({type:"GET",dataType:"json",url:e,success:function(e){displayLocation(e.results[2]),displayDate()}})}function getWeatherURL(e,t){var a="https://api.forecast.io/forecast/"+weatherAPIKEY+"/"+e+","+t;getWeatherJSON(a)}function getWeatherJSON(e){$.ajax({type:"GET",dataType:"jsonp",url:e,success:function(e){var t=currentWeatherData(e),a=weekWeatherData(e),r=hourlyWeatherData(e);displayCurrentWeather(t),displayDailyWeather(a),displayHourlyWeather(r)}})}function currentWeatherData(e){var t={};return t.icon=e.currently.icon,t.currentTemp=Math.round(e.currently.apparentTemperature),t.highTemp=Math.round(e.daily.data[0].apparentTemperatureMax),t.lowTemp=Math.round(e.daily.data[0].apparentTemperatureMin),t.windSpeed=e.currently.windSpeed,t.windDirection=e.currently.windBearing,t.humidity=e.currently.humidity,t.pressure=e.currently.pressure,t.visibility=e.currently.visibility,t}function hourlyWeatherData(e){for(var t=[],a=0;49>a;a++)t[a]={},t[a].time=e.hourly.data[a].time,t[a].hourTemp=Math.round(e.hourly.data[a].apparentTemperature),t[a].precipProb=e.hourly.data[a].precipProbability,t[a].windSpeed=e.hourly.data[a].windSpeed,t[a].windDirection=e.hourly.data[a].windBearing,console.log(t[a].windDirection);return t}function weekWeatherData(e){for(var t=[],a=1;8>a;a++)t[a]={},t[a].time=e.daily.data[a].time,t[a].icon=e.daily.data[a].icon,t[a].highTemp=Math.round(e.daily.data[a].apparentTemperatureMax),t[a].lowTemp=Math.round(e.daily.data[a].apparentTemperatureMin);return t}var weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ",weatherAPIKEY="2ebc8b5047823a6fbe879e5bc62a4462",revGeoAPIKEY="AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ";
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

function getWeatherDescription(icon){
   var weatherDescription = {
    "clear-day":["SUNNY","have a nice day"],
    "clear-night":["CLEAR","enjoy the view"],
    "rain":["RAIN","bring an umbrella"],
    "snow":["SNOW","bring a coat"],
    "sleet":["SLEET","a wintry mix"],
    "wind":["WINDY","don't get blown away"],
    "fog":["FOGGY","low visibility"],
    "cloudy":["CLOUDY", "goodbye sun"],
    "partly-cloudy-day":["SUNNY", "with clouds"],
    "partly-cloudy-night":["CLEAR", "with some clouds"],
    "thunderstorm":["STORMY","relax at home"]
  };
  return weatherDescription[icon];
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

function toggleView(){
  var condensedStatus = $(".upper-half .current-weather-row-condensed").css("display");
  var expanded = $(".upper-half .current-weather-row-expanded");
  var condensed = $(".upper-half .current-weather-row-condensed");
    console.log('hello');
  if(condensedStatus == "none"){
    $(expanded).fadeOut("fast", function(){
      $(expanded).css("display","none");
      $(condensed).fadeIn("fast", function(){
        $(condensed).css("display","inline");
      });
    });
    
  }else{
    $(condensed).fadeOut("fast", function(){
      condensed.css("display","none");
      $(expanded).fadeIn("fast", function(){
        $(expanded).css("display","inline");
      });
    });
    
  }
}


function displayLocation(data){
  var cityData = data.address_components[1].long_name;
  var stateData = data.address_components[2].short_name;
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
  var currentWeatherSection = ".upper-half .current-weather"
  var currentWeatherStatsSection = ".upper-half .current-weather-row-expanded .current-weather-stats"
  //====Condensed====//
  //Show Current Weather Icon
  $(currentWeatherSection+" .current-weather-icon").html("<img src = "+getWeatherIcon(data.icon)+">");
  //Show Current Temp
  $(currentWeatherSection+" .current-temp").html(data.currentTemp+'°');
  //Show High Temp
  $(currentWeatherSection+" .high-temp").html(data.highTemp+'°');
  //Show Low Temp
  $(currentWeatherSection+" .low-temp").html(data.lowTemp+'°');

  //====Expanded====//
  //Show Current Weather Description
  var description = getWeatherDescription(data.icon);
  $(currentWeatherSection+" .current-weather-description .description .main").html(description[0]);
  $(currentWeatherSection+" .current-weather-description .description .sub").html(description[1]);
  //Show Current Temp
  $(currentWeatherStatsSection + " .temps .current-temp").html(data.currentTemp+'°');
  //Show High Temp
  $(currentWeatherStatsSection + " .temps .high-temp .value").html(data.highTemp+'°');
  //Show Low Temp
  $(currentWeatherStatsSection + " .temps .low-temp .value").html(data.lowTemp+'°');
  //Show WindSpeed
  $(currentWeatherStatsSection + " .other-stats .wind-row .value").html(/*getWindDirection(data.windDirection) +*/ data.windSpeed + " mph")
  //Show Humidity
  $(currentWeatherStatsSection + " .other-stats .humidity-row .value").html(data.humidity*100 + "%");
  //Show Pressure
  $(currentWeatherStatsSection + " .other-stats .pressure-row .value").html(Math.round(data.pressure*0.0295301)+" in");
  //Show Precipitation
  $(currentWeatherStatsSection + " .other-stats .precipitation-row .value").html(data.precipProb*100+"%");  
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
    $(hourRow+" .hour-"+i+"-row .time").html(hourToString(data[i].time));
    $(hourRow+" .hour-"+i+"-row .temp").html(data[i].hourTemp+"°");
    $(hourRow+" .hour-"+i+"-row .precip").html((data[i].precipProb)*100 +" %");
    $(hourRow+" .hour-"+i+"-row .wind").html(getWindDirection(data[i].windDirection) + Math.round(data[i].windSpeed) + " mph");
  }
}
var weatherAPIKEY = "2ebc8b5047823a6fbe879e5bc62a4462";
var revGeoAPIKEY = "AIzaSyAbKLKTekvZk6cHzvr8fQbZJi0vfpZhKEQ";

$(document).ready(function(){
  getWeather();
});

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
  currentData.precipProb = data.currently.precipProbability;
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


