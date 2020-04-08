require('dotenv').config();
require('./lib/utils/connect')();

//scraper functions that return facts as an array of strings
const { who, whoMentalDisorder, whoSchizophrenia } = require('./lib/scrapers/who');
const { eatingRecoveryCenter } = require('./lib/scrapers/eatingRecoveryCenter');
const { hopeForDepression } = require('./lib/scrapers/hopeForDepression');
const { anxietyDisorder } = require('./lib/scrapers/ADAA');
const { anxietyFacts } = require('./lib/scrapers/promisesbehavioral');
const { nimh } = require('./lib/scrapers/nimh');
const { nami } = require('./lib/scrapers/nami');
const { self } = require('./lib/scrapers/self');

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
  .then(facts => facts.reduce((acc, curr) => {
    if(curr.length < 250) {
      acc.push(curr);
    } return acc;
  }, []))
  // .then(facts => console.log(facts.length));
  .then(facts => Fact.create(
    facts.map(fact => ({ 
      fact_text: fact,
      has_tweeted: false,
      hashtag_type: 'adhd'
    }))));
  
// source, and other not required props we can keep off for now
