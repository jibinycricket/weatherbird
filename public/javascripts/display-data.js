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
  $(currentWeatherStatsSection + " .other-stats .humidity-row .value").html(Math.round(data.humidity*100) + "%");
  //Show Pressure
  $(currentWeatherStatsSection + " .other-stats .pressure-row .value").html(Math.round(data.pressure*0.0295301)+" in");
  //Show Precipitation
  $(currentWeatherStatsSection + " .other-stats .precipitation-row .value").html(Math.round(data.precipProb*100)+"%");  
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
    $(hourRow+" .hour-"+i+"-row .precip").html(Math.round((data[i].precipProb)*100) +" %");
    $(hourRow+" .hour-"+i+"-row .wind").html(getWindDirection(data[i].windDirection) + Math.round(data[i].windSpeed) + " mph");
  }
}