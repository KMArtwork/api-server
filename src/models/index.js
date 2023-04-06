'use strict';

// require sequelize ORM (object-relational mapper)
const Sequelize = require('sequelize');
// get SQL connection string
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:'

const team = require('./teamModel');
const teammate = require('./teammateModel');
