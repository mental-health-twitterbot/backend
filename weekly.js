require('dotenv').config();
require('./lib/utils/connect')();
const Tweet = require('./lib/models/Tweet');
const sendSuggestedTweets = require('./lib/utils/mailgun');

// Tweet.generate(); envoke the 10 tweet function = suggestedTweets .then
// sendSuggestedTweets(suggestedTweets); envoke the email function
// on click from the mailgun email, update the database tweets to 'approved'

weekly();

async function weekly() {
  const suggestedTweets = await Tweet.generate();
  sendSuggestedTweets(suggestedTweets);
}

// { tweet: ", tweet_url:"} this is where we will pass the approval get route
// make a virtual with tweet_url

module.exports = { weekly };
