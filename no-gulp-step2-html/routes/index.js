module.exports = app => {
  const backstage = require('./backstage'); //使用route/backstage.js處理路由
  app.use(/^\/$/, backstage.root); //開頭跟結尾都是「/」的路由
  //app.use('/', backstage.root); //會覆蓋所有/開頭的
  app.use('/index', backstage.index); //回應「/index」
};
