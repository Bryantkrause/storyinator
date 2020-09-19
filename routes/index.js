module.exports = app => {
    require('./characterRoutes.js')(app),
    require('./dungeonMasterRoutes.js')(app),
    require('./userRoutes.js')(app)
  }