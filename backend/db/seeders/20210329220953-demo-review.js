'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        reviewerId: 3,
        reviewedId: 1,
        title: 'Great course, highly recommend',
        body: 'I took this class after work one day and feel like I can code anything!',
        classId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewerId: 4,
        reviewedId: 3,
        title: 'So much fun, wish he offered more classes',
        body: 'I learned so much and will be making these dishes every week now',
        classId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', {});
  }
};
