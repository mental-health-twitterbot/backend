const request = require('supertest');
const app = require('../lib/app');
const { getTweet, getTweets } = require('../db/db-helpers');

describe('tweet routes', () => { 
    
  //GET route from our db
  it('gets a single tweet', async() => {  
    const tweet = await getTweet();

    return request(app)
      .get('/api/v1/tweets')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tweet_text: tweet.tweet_text,
          approved: tweet.approved,
          has_tweeted: tweet.has_tweeted,
          __v: 0
        });
      });
  });

  it('gets all tweets', async() => {
    const tweets = await getTweets();

    return request(app)
      .get('/api/v1/tweets')
      .then(res => {
        expect(res.body).toContainEqual({
          _id: expect.any(String),
          tweet_text: tweets.tweet_text,
          approved: tweets.approved,
          has_tweeted: tweets.has_tweeted,
          __v: 0
        });
      });
  });

  it('gets a tweet and updates it to approved', async() => {
    const tweet = await getTweet();

    return request(app)
      .get(`/api/v1/tweets/approve/${tweet._id}`)
      .send({ approved: true })
      .then(res => {
        expect(res.body).toEqual({
          ...tweet, 
          approved: true
        });
      });
  });

});

