var fs = require('fs');
var https = require('https');
var key = fs.readFileSync('./key.pem');
var cert = fs.readFileSync('./cert.pem');
var https_options = {
  key: key,
  cert: cert
};

var express = require('express');
var app = express();
var port= process.env.port || 3000;
var path = require('path');
var routes = require ('./routes');

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Views as directory for template files
app.set('view engine', 'pug'); //Set template to use pug

//Set Server using https


/*Set Server*/
if(process.env === 'production'){ 
  app.listen(port, function(){
    console.log('HTTP Server is running on port: '+ port);
  });
}else{
  https.createServer(https_options, app).listen(port, function(){
    console.log("HTTPS Server is running on port: "+port);
  });
}

//routes
app.get('/', routes.home);
app.get('*', routes.notFound);


