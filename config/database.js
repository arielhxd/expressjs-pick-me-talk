require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "pickmeup",
  host: process.env.DB_HOSTNAME || "localhost",
  port: process.env.DB_PORT || 3306,
  dialect: "mysql",
  dialectOptions: {
    bigNumberStrings: true,
  },
};
