// initializes our table and seeds it with a piece of data

'use strict'

const { sequelize, Food } = require('./src/models/foodModel');

sequelize.sync()
.then(async () => {

  let initialSeed = await Food.create({
    name: 'Chicken Wings',
    type: 'American',
    flavors: 'Buffalo',
    canBeSpicy: true,
    hotOrCold: 'hot'
  })

  console.log('Database seeded with ', initialSeed);

})
.catch(error => console.error(error))