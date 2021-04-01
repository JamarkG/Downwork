'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Users'}
    },
    requiredTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableTimes: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
    videoLink: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
    Class.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Class;
};
