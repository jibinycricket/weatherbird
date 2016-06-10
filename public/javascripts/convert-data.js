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
