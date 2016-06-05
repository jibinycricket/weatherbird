//Routes
exports.home = function(req, res){
  res.render("home", 
    { title: 'WeatherBird',
      APIKEY: process.env.FORECAST_APIKEY
    }
  );
};

exports.notFound = function(req, res){
  res.send("Error 404: Not Found")
};