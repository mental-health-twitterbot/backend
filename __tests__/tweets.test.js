const request = require('supertest');
const app = require('../lib/app');
const { getTweet, getTweets } = require('../db/db-helpers');

describe('tweet routes', () => { 

  it('gets all tweets', async() => {
    const tweets = await getTweets();
    return request(app)
      .get('/api/v1/tweets')
      .then(res => {
        // console.log(res.body);
        expect(res.body).toContainEqual({
          _id: expect.any(String),
          tweet_text: tweets[0].tweet_text,
          approved: true,
          has_tweeted: true,
          tweet_url: tweets[0].tweet_url,
          __v: 0
        });

      });
  });

  it('returns an empty object if there are no tweets that are both approved and not tweeted', async() => {
    await getTweets({ approved: true });
    return request(app)
      .get('/api/v1/tweets/content')
      .then(res => {
        expect(res.body).toEqual({});
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

