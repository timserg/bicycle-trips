'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      router_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:"Routers",
          key: "id",
        },
        onDelete: "CASCADE",

      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:"Users",
          key: "id",          
        },
        onDelete: "CASCADE",
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};
