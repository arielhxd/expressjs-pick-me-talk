"use strict";

const app = require("../../config/app");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hostname = `${app.host}:${app.port}`;

    await queryInterface.bulkInsert("quizzes", [
      {
        question: "What fruit is the picture above?",
        a: "Durian",
        b: "Pineapple",
        c: "Orange",
        d: "Kiwi",
        answer: "a",
        image: `${hostname}/images/fruit/spongbob.jpg`,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What fruit is the picture above?",
        a: "Cherry",
        b: "Lemon",
        c: "Kiwi",
        d: "Pear",
        answer: "c",
        image: `${hostname}/images/fruit/spongbob.jpg`,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What animal is the picture above?",
        a: "Cow",
        b: "Goat",
        c: "Sheep",
        d: "Swan",
        answer: "c",
        image: `${hostname}/images/animal/spongbob.jpg`,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What animal is the picture above?",
        a: "Bee",
        b: "Cow",
        c: "Rabbit",
        d: "Bisson",
        answer: "b",
        image: `${hostname}/images/animal/spongbob.jpg`,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What family is the picture above?",
        a: "Mother",
        b: "Father",
        c: "Son",
        d: "Cousin",
        answer: "d",
        image: `${hostname}/images/family/spongbob.jpg`,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What family is the picture above?",
        a: "Grandmother",
        b: "Aunt",
        c: "Mother",
        d: "Daughter",
        answer: "c",
        image: `${hostname}/images/family/spongbob.jpg`,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What transportation is the picture above?",
        a: "Bicycle",
        b: "Plane",
        c: "Bus",
        d: "Jet",
        answer: "d",
        image: `${hostname}/images/transportation/spongbob.jpg`,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What transportation is the picture above?",
        a: "Motorcycle",
        b: "School Bus",
        c: "Taxi",
        d: "Tractor",
        answer: "c",
        image: `${hostname}/images/transportation/spongbob.jpg`,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quizzes", null, {});
  },
};
