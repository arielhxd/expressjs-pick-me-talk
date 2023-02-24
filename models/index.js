/**
 * Module dependencies.
 */
const Sequelize = require("sequelize");
const connection = require("../config/database");

/**
 * Connect server to database using connection type data.
 */
const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  {
    host: connection.host,
    port: connection.port,
    dialect: connection.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.quiz = require("./quiz")(sequelize, Sequelize);
db.category = require("./category")(sequelize, Sequelize);

// Relations
db.quiz.belongsTo(db.category, { foreignKey: "categoryId" });
db.category.hasMany(db.quiz, { foreignKey: "categoryId" });

module.exports = db;
