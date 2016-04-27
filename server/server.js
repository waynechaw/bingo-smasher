var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/bingo');

// configure our server with all the middleware and routing

require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
console.log("Server is up!")

// export our app for testing and flexibility, required by index.js
module.exports = app;