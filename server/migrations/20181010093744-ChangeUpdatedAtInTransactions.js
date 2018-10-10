'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Transactions", "updatedAt", "updated_at");
  }
};
