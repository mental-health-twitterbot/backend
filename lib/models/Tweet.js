const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    required: true, 
    enum: ['Fact', 'Question']
  },
  hashtag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hashtag',
    required: true
  },
  has_tweeted: {
    type: Boolean, 
    required: true
  }
});

module.exports = mongoose.model('Tweet', schema);

//ref for referencing two Models
// https://mongoosejs.com/docs/populate.html#dynamic-ref
