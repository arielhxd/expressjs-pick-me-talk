require("dotenv").config();

module.exports = {
  name: process.env.APP_NAME || "Express JS",
  port: process.env.APP_PORT || "3000",
  host: process.env.APP_URL || "http://localhost",
};
