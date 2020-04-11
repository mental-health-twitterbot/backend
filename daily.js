require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const Tweet = require('./lib/models/Tweet');
const { sendEmail } = require('./lib/utils/mailgun');

// post 'approved' tweets daily and not yet tweeted and tweet it 
Tweet.findOneAndUpdate({
  approved: true,
  has_tweeted: false
},
{
  has_tweeted: true
}
)
  .then(tweet => {
    // send an email if there are no approved tweets to send
    if(!tweet) {
      return sendEmail({
        subject: 'No tweets :(',
        text: 'No approved tweets to send today'
      });
    }

    // send an email when an approved tweet would have been tweeted
    return sendEmail({
      subject: 'Sending tweet!',
      text: `We sent out a tweet: ${tweet.tweet_text}`
    });
  })
  .finally(() => mongoose.connection.close());

//   once have twiiter integration instead of concole loging (sendTweet();)

