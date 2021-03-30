'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewerId: DataTypes.INTEGER,
    reviewedId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    classId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};