require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const Tweet = require('./lib/models/Tweet');

// post 'approved' tweets daily and not yet tweeted and tweet it 
Tweet.findOneAndUpdate({
  approved: true,
  has_tweeted: false
},
{
  has_tweeted: true
}
)
  .then(tweet => console.log(`would Have Tweeted Tweet ${tweet}`))
  .finally(() => mongoose.connection.close());

//   once have twiiter integration instead of concole loging (sendTweet();)

