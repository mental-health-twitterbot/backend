const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

  question_text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Question', questionSchema);
