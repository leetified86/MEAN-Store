var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

var mongoose = require('./config/mongoose.js');
var routes = require('./config/routes.js')(app);

// start listening
app.listen(8000, function(){
  console.log("Listening on 8000");
});