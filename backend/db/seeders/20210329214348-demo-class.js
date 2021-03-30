'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Class', [
      {
        title: 'Learn how to code a React app',
        body: 'Hello, this class will explore the basic fundamentals of React to get you started, from creating and rendering components to interactions with them.',
        userId: 1,
        requiredTime: 45,
        price: 20,
        availableTimes: 'MWF 7-9pm PST'
      },
      {
        title: 'Make your React app look great!',
        body: 'Hello, this class will focus on the styling/CSS side of making a great React app.',
        userId: 1,
        requiredTime: 30,
        price: 15,
        availableTimes: 'MWF 7-9pm PST'
      },
      {
        title: 'Learn how to make native Kazakh dishes',
        body: 'We will explore the basic fundamentals of local ingredients to get you started, and then create 3 local dishes.',
        userId: 2,
        requiredTime: 60,
        price: 25,
        availableTimes: 'TTh 5-8pm PST'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Class', {});
  }
};
