"use strict";

/**
 * Module dependencies.
 */
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quiz.init(
    {
      question: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Question must not be empty" } },
      },
      a: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "A must not be empty" } },
      },
      b: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "B must not be empty" } },
      },
      c: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "C must not be empty" } },
      },
      d: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "D must not be empty" } },
      },
      answer: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Answer must not be empty" } },
      },
      image: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Image must not be empty" } },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: { msg: "Category must not be empty" } },
        references: {
          model: "categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "quiz",
      tableName: "quizzes",
    }
  );
  return Quiz;
};
