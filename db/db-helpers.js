require('dotenv').config();
const Tweet = require('../lib/models/Tweet');
const connect = require('../lib/utils/connect');
const dataImport = require('../db/dataImport');
const mongoose = require('mongoose');
const fs = require('fs');

// beforeAll(() => {
//   connect();
//   Promise.all([
//     mongoose.connection.dropCollection('facts'),
//     mongoose.connection.dropCollection('hashtags'),
//     mongoose.connection.dropCollection('questions')
//   ]);
//   return dataImport();
// });

// beforeEach(() => {
//   Tweet.generate(10)
//     .then(console.log);
// });

// afterAll(() => {
//   return mongoose.connection.close();
// });

//Ryan's first suggestion
// beforeAll(() => {
//   connect();
// });
// beforeAll(() => {
//   return mongoose.dropDatabase();
// });
// beforeAll(() => {
//   return dataImport();
// });
// beforeEach(() => {
//   return Tweet.generate(10);
// });

beforeAll(() => {
  return connect()
    .then(() => mongoose.connection.dropDatabase())
    .then(() => dataImport())
    .then(() => Tweet.generate(10));
});

afterAll(() => {
  return mongoose.connection.close();
});

const prepare = model => JSON.parse(JSON.stringify(model));
const prepareAll = models => models.map(prepare);

// reading our models directory *** READ DIR GOES FROM THE ROOT OF REPO
const files = fs.readdirSync('./lib/models');
const getters = files
  // for each file in our models directory import the model
  .map(file => require(`../lib/models/${file}`))
  // make sure that what we imported is actually a model
  .filter(Model => Model.prototype instanceof mongoose.Model)
  // for each model create a getModelName function that returns an instance of our model
  .reduce((acc, Model) => {
    return {
      ...acc,
      [`get${Model.modelName}`]: (query, select) => Model.findOne(query).select(select).then(prepare),
      [`get${Model.modelName}s`]: (query, select) => Model.find(query).select(select).then(prepareAll)
    };
  }, {});
console.log(getters);
module.exports = getters;

// *** normal
// const cookies = await getCookies();
// *** with query
// const cookies = await getCookies({ name: 'chocolate' });
// *** with select
// const cookies = await getCookies({}, { name: true, description: true });
// *** with query and select
// const cookies = await getCookies({ name: 'chocolate' }, { name: true, description: true });

