const mongoose = require('mongoose');
const app = require('../app');
const request = require('supertest');

const schema = new mongoose.Schema({
  tweet_text: {
    type: String,
    required: true
  },
  tweet_type: {
    type: String,
    enum: ['question', 'fact'],
    required: true
  },
  has_tweeted: {
    type: Boolean, 
    required: true
  }
});

module.exports = mongoose.model('Tweet', schema);


