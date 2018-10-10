'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coupon = sequelize.define('Coupon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Coupon.associate = function (models) {
    // associations can be defined here
    models.Coupon.belongsTo(models.User)
  };
  return Coupon;
};