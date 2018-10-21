'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Transactions", "user_id", "UserId")
  },
};
