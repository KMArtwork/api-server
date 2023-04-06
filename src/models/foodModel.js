'use strict'

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// our path to connect to SQL database
const SQL_URL = process.env.SQL_URL || "sqlite:memory:"

// actually connects to the SQL database
const sequelize = new Sequelize(SQL_URL);

// defines table and all of its columns (each property on the defined object is a column in the SQL table)
const Food = sequelize.define("Food", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flavors: {
    type: DataTypes.ARRAY,
    allowNull: false,
  },
  canBeSpicy: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  hotOrCold: {
    type: DataTypes.ENUM('hot', 'cold', 'either'),
    allowNull: false
  },
})

module.exports = {
  sequelize,
  Food,
}