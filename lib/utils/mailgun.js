const mailgun = require('mailgun-js');
const DOMAIN = 'sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org';
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

const data = {
  from: 'Mailgun Sandbox <postmaster@sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org>',
  to: 'dakotadruley@gmail.com',
  subject: 'Hello',
  template: 'suggested_tweets',
  v:suggestedTweets [
    { tweet: 'test1', _id: '1234', tweet_url: 'url' },
    { tweet: 'test2', _id: '1235', tweet_url: 'url' }
  ]
};
// use template within data and inject 'suggested tweets' 
mg.messages().send(data)
  .then(response => console.log(response));
//   you can use a callback or you can use a promise, which aligns with our other code that uses promises
// You can send up to 300 emails/day from this sandbox server.
const sendSuggestedTweets = (suggestedTweets) => {

};
