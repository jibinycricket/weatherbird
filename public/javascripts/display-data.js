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
    $(hourRow+" .hour-"+i+"-row .precip").html((data[i].precipProb)*100 +" %");
    $(hourRow+" .hour-"+i+"-row .wind").html(getWindDirection(data[i].windDirection) + data[i].windSpeed + " MPH");
  }
}