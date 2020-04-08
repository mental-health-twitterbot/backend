const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
  hashtag: {
    type: String, 
    required: true,
  },
  hashtag_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fact',
    required: true
  }
});

module.exports = mongoose.model('Hashtag', hashtagSchema);
