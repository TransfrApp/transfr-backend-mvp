const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the User API!',
  }));

  // Users
  app.post('/api/user', userController.create);
  app.post('/api/user/login', userController.login);
  app.get('/api/user', userController.list);
  app.patch('/api/user', userController.update);
  // Transactions


  // Coupons


  // Inventory
};
