'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Inventories", "user_id", "UserId");
  }
};
