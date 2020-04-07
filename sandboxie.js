
const { who, whoMentalDisorder, whoSchizophrenia } = require('./lib/scrappers/who');
const { anxietyDisorder } = require('./lib/scrappers/ADAA');
const { anxietyFacts } = require('./lib/scrappers/promisesbehavioral');
who()
  .then(data => console.log(data));

whoMentalDisorder()
  .then(data => console.log(data));

whoSchizophrenia()
  .then(data => console.log(data));

anxietyDisorder()
  .then(data => console.log(data));

anxietyFacts()
  .then(data => console.log(data));
