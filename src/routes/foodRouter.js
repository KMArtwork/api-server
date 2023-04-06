'use strict'

const express = require('express');
const router = express.Router();
const { Food } = require('../models/foodModel');

// CRUD Operations

// creates one Food entry and adds it to the SQL database
const createFood = async (request, response, next) => {
  const newFood = await Food.create(request.body);
  response.status(201).json(newFood);
}

// returns all Food entries in the SQL database
const readAllFood = async (request, response, next) => {
  let foodData = await Food.findAll();
  response.status(200).json(foodData)
}

// returns one Food entry in the SQL database
const readOneFood = async (request, response, next) => {
  let foodData = await Food.findOne({where: {id: request.params.id}});
  response.status(200).json(foodData)
}

// finds one Food entry in the SQL database, and updates/changes the whole entry
const replaceFood = async (request, response, next) => {
  let foodData = await Food.findOne({where: {id: request.params.id}});
  await foodData.update(request.body);
  response.status(200).json(foodData)
}

const updateFood = async (request, response, next) => {
  let foodData = await Food.findOne({where: {id: request.params.id}});
  for (const key in foodData.dataValues) {
    // if key matches with a property on the request.body AND if the value of that property on the request.body is different than what is in the database - we update
    if (foodData[key] !== request.body[key] && request.body[key]) {
      await foodData.update({[key]: request.body[key]})
    }
  }
  response.status(200).json(foodData);
}

const deleteFood = async (request, response, next) => {
  let foodData = await Food.findOne({where: {id: request.params.id}});
  if (foodData) {
    await foodData.destroy()
  }
  response.status(200).send('Entry successfully removed from Database')
}

// Routes
router.post('/', createFood)

router.get('/', readAllFood)
router.get('/:id', readOneFood)

router.put('/:id', replaceFood)
router.patch('/:id', updateFood)

router.delete('/:id', deleteFood)

module.exports = router;