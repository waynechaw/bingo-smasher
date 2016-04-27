var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  app.get('/', function(req, res){
    res.send("Bingo SMASH")
  })
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);


};