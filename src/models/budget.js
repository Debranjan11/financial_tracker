const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Budget = sequelize.define('Budget', {
  name: { type: DataTypes.STRING, allowNull: false },
  currency: { type: DataTypes.STRING, defaultValue: 'INR' },
  limit: { type: DataTypes.FLOAT, allowNull: true }
});

module.exports = Budget;
