const { hopeForDepression } = require('./lib/scrappers/hopeForDepression');


// const { who, whoMentalDisorder, whoSchizophrenia } = require('./lib/scrappers/who');
// const { anxietyDisorder } = require('./lib/scrappers/ADAA');
// const { anxietyFacts } = require('./lib/scrappers/promisesbehavioral');
// // who()
//   .then(data => console.log(data));

// whoMentalDisorder()
//   .then(data => console.log(data));

// whoSchizophrenia()
//   .then(data => console.log(data));


//DONE
// eatingRecoveryCenter()
//   .then(data => console.log(data));

//DONE
// anxietyDisorder()
//   .then(data => console.log(data));

hopeForDepression()
  .then(data => console.log(data));

