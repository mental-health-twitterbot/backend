const Tweet = require('./lib/models/Tweet');
require('dotenv').config();
require('./lib/utils/connect')();

Tweet.generate(10)
  .then(console.log);

// const { who, whoMentalDisorder, whoSchizophrenia } = require('./lib/scrapers/who');
// const { anxietyDisorder } = require('./lib/scrapers/ADAA');
// const { anxietyFacts } = require('./lib/scrapers/promisesbehavioral');
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

//DONE
// hopeForDepression()
//   .then(data => console.log(data));

//DONE
// nami()
//   .then(data => console.log(data));

// nimh()
//   .then(data => console.log(data));

// DAKOTA STARTED HERE
// DONE
// who()
//   .then(data => console.log(data));

// DONE
// whoMentalDisorder()
//   .then(data => console.log(data));

// DONE
// whoSchizophrenia()
//   .then(data => console.log(data));

// DONE
// self()
//   .then(data => console.log(data));

// DONE
// anxietyFacts()
//   .then(data => console.log(data));

// const tweet = Tweet.tweet;
// console.log(tweet);
