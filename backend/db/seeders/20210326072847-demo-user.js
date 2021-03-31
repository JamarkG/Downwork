'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        emailAddress: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        fullName: 'Mr. Demo',
        Biography: 'hello my name is Demoooo'
      },
      {
        emailAddress: 'joe@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        fullName: 'Joe Shmo',
        Biography: 'I am top chef in all Kazakhstan'
      },
      {
        emailAddress: 'fakeuser1@email.com',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        fullName: 'Fake User1',
        Biography: 'hello my name is Fake User1'
      },
      {
        emailAddress: 'fakeuser2@email.com',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        fullName: 'Fake User2',
        Biography: 'hello my name is Fake User2'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {});
  }
};
