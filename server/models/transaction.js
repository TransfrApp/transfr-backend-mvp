'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    items: {
      type: DataTypes.JSON,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Transaction.associate = models => {
    // associations can be defined here
    models.Transaction.belongsTo(models.User);
  };
  return Transaction;
};