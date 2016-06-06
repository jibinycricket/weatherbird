//Variables for HTTPS Server
var fs = require('fs');
var https = require('https');
var key = fs.readFileSync('./key.pem');
var cert = fs.readFileSync('./cert.pem');
var https_options = {
  key: key,
  cert: cert
};

//Setup Express Server
var express = require('express');
var app = express();
var port= process.env.PORT || 3000;
var path = require('path');
var routes = require ('./routes');
var env = process.env.NODE_ENV || 'development';

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Views as directory for template files
app.set('view engine', 'pug'); //Set template to use pug

/*Set Server*/
if(env === 'production'){ 
  app.listen(port, function(){
    console.log('HTTP Server is running on port: '+ port);
  });
}else{
  https.createServer(https_options, app).listen(port, function(){
    console.log("HTTPS Server is running on port: "+ port);
  });
}

//routes
app.get('/', routes.home);
app.get('*', routes.notFound);


