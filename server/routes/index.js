const userController = require('../controllers').user;
const inventoryController = require('../controllers').inventory;
const couponController = require('../controllers').coupon;
const transactionController = require('../controllers').transaction;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the User API!',
  }));

  // Users
  app.post('/api/user', userController.create);
  app.post('/api/user/login', userController.login);
  app.get('/api/user', userController.list);
  app.post('/api/user/get', userController.getUser);
  app.patch('/api/user', userController.update);

  // Transactions
  app.post('/api/transaction', transactionController.create);
  app.post('/api/transaction/get', transactionController.list);

  // Coupons

  // Inventory
  app.post('/api/inventory', inventoryController.create);
  app.post('/api/inventory/get', inventoryController.list);
};
