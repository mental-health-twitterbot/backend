const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

  question_text: {
    type: String,
    required: true
  },
  // question_type:{
  //   type: String,
  //   enum: ['feel', 'relate', 'think', 'share', 'act'],
  //   required: true
  // }
});

module.exports = mongoose.model('Question', questionSchema);