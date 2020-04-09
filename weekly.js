require('dotenv').config();
require('./lib/utils/connect')();
const Tweet = require('./lib/models/Tweet');
const { sendSuggestedTweets } = require('./lib/utils/mailgun');

async function weekly() {
  const suggestedTweets = await Tweet.generate();
  const mailResult = await sendSuggestedTweets(suggestedTweets);
  console.log(mailResult);
}

weekly();
// { tweet: ", tweet_url:"} this is where we will pass the approval get route
// make a virtual with tweet_url

module.exports = { weekly };

// schedular for this file 
