"use strict";

/**
 * Module dependencies.
 */
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Category must not be empty" } },
      },
      image: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Image must not be empty" } },
      },
      style: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Style must not be empty" } },
      },
    },
    {
      sequelize,
      modelName: "category",
      tableName: "categories",
    }
  );
  return Category;
};
