'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('boughtClass', [
      {
        userId: 3,
        classId: 1,
      },
      {
        userId: 4,
        classId: 3,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('boughtClass', {});
  }
};
