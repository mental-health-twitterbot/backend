require('dotenv').config();

const connect = require('../lib/utils/connect');
const dataImport = require('../db/dataImport');
const mongoose = require('mongoose');


connect();
Promise.all([
  mongoose.connection.dropCollection('facts'),
  mongoose.connection.dropCollection('hashtags'),
  mongoose.connection.dropCollection('questions')
])
  .then(() => dataImport())
  .then(() => {
    console.log('data seed complete');
    return mongoose.connection.close();
  });
