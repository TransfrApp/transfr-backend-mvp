'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Inventories", "updatedAt", "updated_at");
  }
};
