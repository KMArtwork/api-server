'use strict'

const express = require('express');
const router = express.Router();
const { Team } = require('../models/teamModel');
const Collection = require('../models/collection');

// Routes
router.post('/', async (request, response, next) => {
  try {
    await Collection.create(request.body);
  } 
  catch (err) {
    console.error('ROUTER ERROR > Unable to create new DB entry ', err)
  }
})

router.get('/', readAllFood)
router.get('/:id', readOneFood)

router.put('/:id', replaceFood)
router.patch('/:id', updateFood)

router.delete('/:id', deleteFood)

module.exports = router;