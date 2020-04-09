const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

  question_text: {
    type: String,
    required: true
  }
});
//projecting... counting the length of question text
//matching question length with maxLen
//returning one example
questionSchema.statics.random = function(maxLen){
  return this.aggregate([
    {
      '$project': {
        'question_length': {
          '$strLenCP': '$question_text'
        }, 
        'question_text': true
      }
    }, {
      '$match': {
        'question_length': {
          '$lte': maxLen
        }
      }
    }, {
      '$sample': {
        'size': 1
      }
    }
  ])
    .then(([question]) => question);
};

module.exports = mongoose.model('Question', questionSchema);
