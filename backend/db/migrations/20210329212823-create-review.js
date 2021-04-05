'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewerId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      reviewedId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      title: {
        type: Sequelize.STRING(75)
      },
      body: {
        type: Sequelize.TEXT
      },
      classId: {
        type: Sequelize.INTEGER,
        references: {model: 'Classes'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
