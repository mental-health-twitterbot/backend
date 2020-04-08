require('dotenv').config();
require('./lib/utils/connect')();

//scraper functions that return facts as an array of strings
const { who, whoMentalDisorder, whoSchizophrenia } = require('./lib/scrappers/who');
const { eatingRecoveryCenter } = require('./lib/scrappers/eatingRecoveryCenter');
const { hopeForDepression } = require('./lib/scrappers/hopeForDepression');
const { anxietyDisorder } = require('./lib/scrappers/ADAA');
const { anxietyFacts } = require('./lib/scrappers/promisesbehavioral');
const { nimh } = require('./lib/scrappers/nimh');
const { nami } = require('./lib/scrappers/nami');
const { self } = require('./lib/scrappers/self');

const Fact = require('./lib/models/Fact');

Promise.all([
  eatingRecoveryCenter(),
  whoMentalDisorder(),
  hopeForDepression(),
  whoSchizophrenia(),
  anxietyDisorder(),
  anxietyFacts(),
  nimh(),
  nami(), 
  self(), 
  who()
])
  .then(facts => facts.flat(Infinity))
  .then(facts => Fact.create(
    facts.map(fact => ({ 
      fact_text: fact,
      has_tweeted: false,
      hashtag_type: 'adhd'
    }))));
  
// source, and other not required props we can keep off for now
