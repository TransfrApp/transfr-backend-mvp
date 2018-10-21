'use strict';
module.exports = (sequelize, DataTypes) => {
  var Inventory = sequelize.define('Inventory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    meta_tags: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Inventory.associate = function (models) {
    // associations can be defined here
    models.Inventory.belongsTo(models.User)
  };
  return Inventory;
};