require('dotenv').config();

const connect = require('../lib/utils/connect');
const seed = require('../db/seed');
const mongoose = require('mongoose');
const fs = require('fs');

beforeAll(() => {
  connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seed();
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

