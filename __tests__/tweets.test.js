const request = require('supertest');
const app = require('../lib/app');
const { getTweet, getTweets } = require('../db/db-helpers');

describe('tweet routes', () => { 

  it('gets all tweets', async() => {
    const tweets = await getTweets();
    return request(app)
      .get('/api/v1/tweets')
      .then(res => {
        console.log(res.body);
        expect(res.body).toContainEqual({
          _id: tweets[0]._id,
          tweet_text: tweets[0].tweet_text,
          approved: true,
          has_tweeted: true,
          __v: 0
        });

      });
  });

  it('gets all approved tweets', async() => {
    const tweets = await getTweets({ approved: true });
    return request(app)
      .get('/api/v1/tweets/content')
      .then(res => {
        expect(res.body).toContainEqual([{
          _id: expect.any(String),
          tweet_text: tweets[0].tweet_text,
          approved: tweets[0].approved,
          has_tweeted: tweets[0].has_tweeted,
          __v: 0
        }]);
      });
  });

  it('gets a tweet and updates it to approved', async() => {
    const tweet = await getTweet();

    return request(app)
      .get(`/api/v1/tweets/approve/${tweet._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...tweet, 
          approved: true
        });
      });
  });

});

