require('dotenv').config();
require('./lib/utils/connect')();

const { anxietyDisorder } = require('./lib/scrappers/ADAA');
const { nimh } = require('./lib/scrappers/nimh');
const { anxietyFacts } = require('./lib/scrappers/promisesbehavioral');
const { who, whoMentalDisorder, whoSchizophrenia } = require('./lib/scrappers/who');
const { nami } = require('./lib/scrappers/nami');
const { self } = require('./lib/scrappers/self');
const { hopeForDepression } = require('./lib/scrappers/hopeForDepression');
const { eatingRecoveryCenter } = require('./lib/scrappers/eatingRecoveryCenter');
const Fact = require('./lib/models/Fact');

Promise.all([
  anxietyDisorder(), 
  nami(), 
  self(), 
  hopeForDepression(),
  eatingRecoveryCenter(),
  who(),
  whoMentalDisorder(),
  whoSchizophrenia(),
  nimh(),
  anxietyFacts()
])

  .then(facts => facts.flat(Infinity))
  .then(facts => Fact.create(facts.map(fact => ({ 
    fact_text: fact,
    has_tweeted: false,
    hashtag_type: 'adhd'
  }))));
  
// source, and other not required props we can keep off for now


//   const results = (function) => {
//     return fetch(url)
//       .then(facts => results.push(facts))
//       .then(console.log(results));
//   };
