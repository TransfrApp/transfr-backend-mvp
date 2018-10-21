'use strict';

const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

function hashPassword(user) {
  if (user.changed('password')) {
    return bcrypt.hash(user.password, SALT_ROUNDS)
      .then((hashedPass) => { user.password = hashedPass; });
  }
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    isAdmin: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      default: false
    },
    wallet_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
      },
    });

  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }

  User.associate = models => {
    models.User.hasMany(models.Transaction)
    models.User.hasMany(models.Inventory)
    models.User.hasMany(models.Coupon);
  }
  return User;
};



    /*
    instanceMethods: {
      validPassword: function(password) {
        console.log('valid password called');
        return bcrypt.compareSync(password, this.password);
      },
      isValidPassword(password) {
        return bcrypt.compare(password, this.password);
      },
    },
    */
