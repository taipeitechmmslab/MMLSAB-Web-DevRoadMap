// import libraries
var express = require('express');

// initial express
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0');

require('./routes/index.js')(app);
module.exports = app;
