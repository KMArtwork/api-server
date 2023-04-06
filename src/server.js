'use strict'

// require express & create singleton
const express = require('express');
const app = express();

// require middlewares
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

// require error handlers
const handle404 = require('./error-handlers/handle404');
const handle500 = require('./error-handlers/handle500');

// require router
const router = require('./routes/food')

// uses these middlewares every time a request is made to the server
app.use(cors());
app.use(expres.json())
app.use(logger);

// uses router when any request is made to food route
app.use('/food', validator, router);

app.use(handle404);
app.use(handle500);

module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
  })
}