'use strict';
module.exports = (sequelize, DataTypes) => {
  const boughtClass = sequelize.define('boughtClass', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  boughtClass.associate = function(models) {
    // associations can be defined here
    boughtClass.belongsTo(models.User, { foreignKey: "userId" });
    boughtClass.belongsTo(models.Class, { foreignKey: "classId" });
  };
  return boughtClass;
};

