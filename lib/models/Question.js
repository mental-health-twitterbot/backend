const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

  question_text: {
    type: String,
    required: true
  }
});
questionSchema.statics.random = function(){
  return this.aggregate([{
    $sample: 1
  }])
    .then(([question]) => question);
};

module.exports = mongoose.model('Question', questionSchema);
