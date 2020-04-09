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

schema.statics.generate = async function(n = 5){
  const facts = await this.model('Fact')
    .find({ 
      has_tweeted: false,
      $where: 'this.fact_text.length < 220'
    })
    .limit(n);
};
module.exports = mongoose.model('Tweet', schema);




