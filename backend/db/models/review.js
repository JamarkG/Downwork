'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Users'}
    },
    reviewedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Users'}
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Classes'}
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "reviewerId", sourceKey: 'id' });
    // Review.belongsTo(models.User, { foreignKey: "reviewedId" });
    Review.belongsTo(models.BoughtClass, { foreignKey: "classId", targetKey: 'classId' });

  };

  return Review;
};
