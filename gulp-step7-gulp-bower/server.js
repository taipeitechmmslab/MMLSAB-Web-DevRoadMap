// import libraries
var express = require('express');
var path = require('path');

// initial express
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', ()=> console.log(`Running on ${port}`)); //印出監聽的port

// view engine setup
app.set('views', path.join(__dirname, 'templates')); //設定網頁模板資料夾
app.set('view engine', 'ejs');  //使用ejs模板引擎

app.use(express.static(path.join(__dirname, 'dist')));  //掛載dist資料夾的檔案內容


require('./routes/index.js')(app); //路由控制
module.exports = app;
