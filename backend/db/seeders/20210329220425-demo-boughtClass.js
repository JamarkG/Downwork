'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('boughtClasses', [
      {
        userId: 3,
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        classId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('boughtClasses', {});
  }
};
