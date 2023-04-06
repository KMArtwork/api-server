'use strict'

require('dotenv').config(); // allows us to read from the .env
const server = require('./src/server');
const { sequelize } = require('./src/models/foods')

sequelize.sync()
.then(() => {
  server.start(process.env.PORT)
})
.catch(error => {
  console.error('SQL CONNECTION ERROR: ', error)
})