const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
  hashtag: {
    type: String, 
    required: true,
  },
  hashtag_type: {
    type: String,
    required: true,
    enum: ['general', 'keyword']
  }
});

module.exports = mongoose.model('Hashtag', hashtagSchema);
