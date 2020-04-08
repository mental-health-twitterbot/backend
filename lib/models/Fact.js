const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  fact_text: {
    type: String, 
    required: true
  },
  source: {
    type: String, 
  }, 
  source_url: {
    type: String, 
  }, 
  site_timestamp: {
    type: String
  }, 
  has_tweeted: {
    type: Boolean, 
    required: true
  },
});

module.exports = mongoose.model('Fact', schema);


