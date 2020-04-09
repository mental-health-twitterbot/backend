require('dotenv').config();
// remove dot env once the function is called in another file
const mailgun = require('mailgun-js');
const DOMAIN = 'sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org';
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

// use template within data and inject 'suggested tweets' 
// You can send up to 300 emails/day from this sandbox server.
const sendSuggestedTweets = (suggestedTweets) => {
  const data = {
    from: 'Mailgun Sandbox <postmaster@sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org>',
    to: ['dakotadruley@gmail.com', 'janellemellor@gmail.com', 'sdarianne34@gmail.com', 'thisisjoshford@gmail.com'], 
    subject: 'Suggested Tweets',
    template: 'suggested_tweets',
    'h:X-Mailgun-Variables': JSON.stringify({ suggestedTweets })
  };
    // virtual called url which is a url to a place we can send tweets 
  return mg.messages().send(data)
    .then(response => console.log(response));
};

module.exports = { sendSuggestedTweets };
