// src/models/index.js
require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres", // Explicitly set dialect
  logging: console.log, // Optional: set false to hide SQL logs
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require("./user")(sequelize, DataTypes);

module.exports = db;
