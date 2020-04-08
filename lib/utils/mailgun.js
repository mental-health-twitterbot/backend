const mailgun = require('mailgun-js');
const DOMAIN = 'sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org';
// gunna try just using the fake domain for now
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

const data = {
  from: 'Mailgun Sandbox <postmaster@sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org>',
  to: 'dakotadruley@gmail.com',
  subject: 'Hello',
  template: 'suggested_tweets',
  v:suggestedTweets: [
      { tweet: "test1", _id: "1234", tweet_url: "url" },
      { tweet: "test2", _id: "1235", tweet_url: "url" }
    ]
  // instead of using test we could call the template we create 
};
// use template within data and inject 'suggested tweets' 
mg.messages().send(data)
  .then(response => console.log(response));
//   you can use a callback or you can use a promise, which aligns with our other code that uses promises

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.

const sendSuggestedTweets = (suggestedTweets) => {

};
