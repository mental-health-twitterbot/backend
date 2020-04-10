require('./lib/models/Hashtag.js');
require('./lib/models/Fact.js');
require('./lib/models/Question');
require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const Tweet = require('./lib/models/Tweet');
const { sendSuggestedTweets } = require('./lib/utils/mailgun');

async function weekly() {
  const suggestedTweets = await Tweet.generate();
  const mailResult = await sendSuggestedTweets(suggestedTweets);
  console.log(mailResult);
  return mongoose.connection.close();
}

weekly();
// { tweet: ", tweet_url:"} this is where we will pass the approval get route
// make a virtual with tweet_url

module.exports = { weekly };

// schedular for this file 
