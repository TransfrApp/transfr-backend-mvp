'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Transactions', 'payment_method', {
     type: Sequelize.STRING,
     allowNull: false,
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Transactions', 'payment_method');
  }
};
