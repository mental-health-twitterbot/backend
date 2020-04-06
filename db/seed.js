const chance = require('chance').Chance();
const Fact = require('../lib/models/Fact');

module.exports = async({ exampleToCreate = 10, factsToCreate = 10 } = {}) => {

  const example = await Example.create([...Array(exampleToCreate)].map(() => ({
    name: `${chance.animal()} Studios`, 
    address: {
      city: chance.city(),
      state: chance.state(),
      country: chance.pickone(country)
    }
  })));

  const sources = ['NAMI', 'National Institute of Mental Health', 'Brain & Behavior Research Foundation', 'Trans Lifeline'];

  const source_urls = ['nami.org', 'nimh.nih.gov', 'bbrfoundation.org', 'translifeline.org']

  const facts = await Fact.create([...Array(factsToCreate)].map(() => ({
    text: chance.sentence(),
    source: chance.pickone(sources),
    source_url: chance.pickone(source_urls),
    site_timestamp: chance.timestamp(),
    type: chance.pickone(questions)._id,
    has_tweeted: chance.bool()
  })));

};

