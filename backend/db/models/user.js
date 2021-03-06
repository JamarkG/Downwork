'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    Biography: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'emailAddress', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {
    // User.hasMany(models.Review, { foreignKey: "reviewedId" });
    User.hasMany(models.Class, { foreignKey: 'id', targetKey: "userId" });
    User.hasMany(models.Review, { foreignKey: 'id', targetKey: "reviewerId" });
    User.hasMany(models.BoughtClass, { foreignKey: 'id', targetKey: "userId" });
  };
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, fullName, Biography, emailAddress } = this; // context will be the User instance
    return { id, emailAddress, fullName, Biography };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
          emailAddress: credential,
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ emailAddress, password, fullName, Biography }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
        fullName,
        emailAddress,
        hashedPassword,
        Biography
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};
