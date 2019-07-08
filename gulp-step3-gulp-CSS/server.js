// import libraries
var express = require('express');
var path = require('path');

// initial express
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', ()=> console.log(`Running on ${port}`)); //印出監聽的port


app.use(express.static(path.join(__dirname, 'dist')));  //掛載dist資料夾的檔案內容
app.use(express.static(path.join(__dirname, 'app')));  //掛載檔案app資料夾的內容

require('./routes/index.js')(app); //路由控制
module.exports = app;
