const mongoose = require('mongoose');
const app = require('../lib/app');
const request = require('supertest');

const schema = new mongoose.Schema({
  fact_tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fact',
    required: true
  },
  question_tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  hashtag_tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hashtag',
    required: true
  },
  has_tweeted: {
    type: Boolean, 
    required: true
  }
});

schema.virtual('tweet').get(function() {
  
  return request(app)
    .get('/api/v1/facts')
    .then(res => console.log(res));

});

module.exports = mongoose.model('Tweet', schema);


