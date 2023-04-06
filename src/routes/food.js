'use strict'

const express = require('express');
const router = express.Router();

// Routes
router.post('/', createFood)

router.get('/', readFood)
router.get('/:id', readFood)

router.put('/:id', updateFood)
router.patch('/:id', updateFood)

router.delete('/:id', deleteFood)


// CRUD Operations
const createFood = (request, response, next) => {
  console.log('creating food')
}

const readFood = (request, response, next) => {
  console.log('reading food')
}

const updateFood = (request, response, next) => {
  console.log('updating food')
}

const deleteFood = (request, response, next) => {
  console.log('deleting food')
}

module.exports = router;