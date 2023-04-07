// initializes our table and seeds it with a piece of data

'use strict'

const { sequelize, Food } = require('./src/models/foodModel');
const { sequelize2, Team, Teammate } = require('./src/models/index')

let teamSeedId;

sequelize2.sync()
  .then(async () => {

    let teamSeed = await Team.create({
      name: 'Mighty Morphin Power Rangers',
      mascot: 'Alpha',
      size: 6,
    })

    teamSeedId = teamSeed.id
    console.log('Team Database seeded with ', teamSeed)
  })
  .then(async () => {

    let teammateSeed = await Teammate.create({
      name: 'Jason',
      role: 'Red Ranger',
      teamId: teamSeedId,
    })

  })
  .catch(error => console.error(error))

sequelize.sync()
.then(async () => {

  let initialSeed = await Food.create({
    name: 'Chicken Wings',
    type: 'American',
    flavors: 'Buffalo',
    canBeSpicy: true,
    hotOrCold: 'hot'
  })

  console.log('Food Database seeded with ', initialSeed);

})
.catch(error => console.error(error))