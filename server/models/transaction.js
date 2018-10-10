'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    to: DataTypes.STRING,
    from: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    items: DataTypes.JSON,
    user_id: DataTypes.INTEGER
  }, {});
  Transaction.associate = models => {
    // associations can be defined here
    models.Transaction.belongsTo(models.User);
  };
  return Transaction;
};