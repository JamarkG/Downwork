'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoughtClass = sequelize.define('BoughtClass', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Users'}
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Classes'}
    },
  }, {});
  BoughtClass.associate = function(models) {
    // associations can be defined here
    BoughtClass.belongsTo(models.User, { foreignKey: "userId", sourceKey: 'id' });
    BoughtClass.belongsTo(models.Class, { foreignKey: "classId", sourceKey: 'id' });
    BoughtClass.hasMany(models.Review, { foreignKey: "classId", sourceKey: 'classId' });

  };
  return BoughtClass;
};
