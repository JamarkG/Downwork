'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Review', [
      {
        reviewerId: 3,
        reviewedId: 1,
        title: 'Great course, highly recommend',
        body: 'I took this class after work one day and feel like I can code anything!',
        classId: 45,
      },
      {
        reviewerId: 4,
        reviewedId: 3,
        title: 'So much fun, wish he offered more classes',
        body: 'I learned so much and will be making these dishes every week now',
        classId: 45,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Review', {});
  }
};
