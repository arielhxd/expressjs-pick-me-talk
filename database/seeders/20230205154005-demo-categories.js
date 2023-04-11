"use strict";

const app = require("../../config/app");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hostname = `${app.host}:${app.port}`;

    await queryInterface.bulkInsert("categories", [
      {
        name: "Fruits",
        image: `${hostname}/images/Fruit.png`,
        style: JSON.stringify({
          height: 180,
          width: 300,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Animals",
        image: `${hostname}/images/Animals.png`,
        style: JSON.stringify({
          height: 200,
          width: 300,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Family",
        image: `${hostname}/images/family.png`,
        style: JSON.stringify({
          height: 180,
          width: 270,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Transportation",
        image: `${hostname}/images/transport.png`,
        style: JSON.stringify({
          height: 170,
          width: 270,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
