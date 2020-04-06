const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String, 
    required: true
  },
  source: {
    type: String, 
    enum: ['NAMI', 'National Institute of Mental Health', 'Brain & Behavior Research Foundation', 'Trans Lifeline'],
    required: true
  }, 
  source_url: {
    type: String, 
    enum: ['nami.org', 'nimh.nih.gov', 'bbrfoundation.org', 'translifeline.org'],
    required: true
  }, 
  site_timestamp: {
    type: String
  }, 
  question_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  }, 
  has_tweeted: {
    type: Boolean, 
    required: true
  }
});

module.exports = mongoose.model('Fact', schema);


