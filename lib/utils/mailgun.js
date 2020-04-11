// require('dotenv').config();
// remove dot env once the function is called in another file
const mailgun = require('mailgun-js');
// add list of emails to environment variable
// this will make it easier to update the list of emails in the future
// it also makes it so the list of emails can be different in development and production
const to = process.env.EMAILS.split(',')
const DOMAIN = 'sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org';
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

const sendEmail = props => mg.messages().send({
    from: 'Mailgun Sandbox <postmaster@sandboxb74ecc7d0a444da4a034f3153018d85f.mailgun.org>',
    to,
    ...props
  });

// use template within data and inject 'suggested tweets' 
// You can send up to 300 emails/day from this sandbox server.
const sendSuggestedTweets = (suggestedTweets) => {
  return sendEmail({
    subject: 'Suggested Tweets',
    template: 'suggested_tweets',
    'h:X-Mailgun-Variables': JSON.stringify({ suggestedTweets })
  });
};

module.exports = {
  sendEmail,
  sendSuggestedTweets
};
