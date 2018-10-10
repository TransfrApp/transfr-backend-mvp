'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Users", "updatedAt", "updated_at");
  }
};
