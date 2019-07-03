// import libraries
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

// initial express
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0');

app.use(express.static(path.join(__dirname, 'app')));

require('./routes/index.js')(app);
module.exports = app;
