'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classes', [
      {
        title: 'Learn how to code a React app',
        body: 'Hello, this class will explore the basic fundamentals of React to get you started, from creating and rendering components to interactions with them.',
        userId: 1,
        requiredTime: 45,
        price: 20,
        availableTimes: 'MWF 7-9pm PST',
        videoLink: 'video.link.com/owrbownp4f3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Make your React app look great!',
        body: 'Hello, this class will focus on the styling/CSS side of making a great React app.',
        userId: 1,
        requiredTime: 30,
        price: 15,
        availableTimes: 'MWF 7-9pm PST',
        videoLink: 'video.link.com/ndw48udbk4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Learn how to make native Kazakh dishes',
        body: 'We will explore the basic fundamentals of local ingredients to get you started, and then create 3 local dishes.',
        userId: 2,
        requiredTime: 60,
        price: 25,
        availableTimes: 'TTh 5-8pm PST',
        videoLink: 'video.link.com/mo9v3ksu9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classes', {});
  }
};
