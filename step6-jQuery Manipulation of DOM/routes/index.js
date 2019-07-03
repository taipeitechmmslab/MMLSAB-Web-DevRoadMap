module.exports = app => {
  const backstage = require('./backstage');
  app.use(/^\/$/, backstage.index);
  app.use('/index', backstage.index);
};
