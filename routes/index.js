//Routes
exports.home = function(req, res){
  res.render("home", 
    { title: 'WeatherBird'}
  );
};

exports.notFound = function(req, res){
  res.send("Error 404: Not Found")
};