const chance = require('chance').Chance();

module.exports = async({ exampleToCreate = 10 } = {}) => {

  const example = await Example.create([...Array(exampleToCreate)].map(() => ({
    name: `${chance.animal()} Studios`, 
    address: {
      city: chance.city(),
      state: chance.state(),
      country: chance.pickone()
    }
  })));

};

