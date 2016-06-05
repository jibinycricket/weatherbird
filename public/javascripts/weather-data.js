var env = process.env.NODE_ENV || 'development';
if(env === 'production'){
  var APIKEY = process.env.FORECAST_APIKEY;
  console.log("PRODUCTION"+APIKEY);
}else{
  /* REMOVE AFTER TEST*/
  var APIKEY = "2ebc8b5047823a6fbe879e5bc62a4462";
}
