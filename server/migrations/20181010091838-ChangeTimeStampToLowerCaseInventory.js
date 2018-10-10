'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Inventories", "createdAt", "created_at");
  }
};
