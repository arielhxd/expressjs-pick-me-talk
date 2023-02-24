"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Fruits",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Animals",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Family",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Transportation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
