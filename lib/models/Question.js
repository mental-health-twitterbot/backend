const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

  question: {
    type: String,
    required: true
  },
  type:{
    type: String,
    enum: ['feel', 'relate', 'think', 'share', 'act'],
    required: true
  },
  img_url: {
    type: String
  }
});

module.exports = mongoose.model('Question', questionSchema);