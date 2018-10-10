'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Transactions", "createdAt", "created_at");
  }
};
