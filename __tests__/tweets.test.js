const request = require('supertest');
const app = require('../lib/app');
const { getTweet } = require('../db/db-helpers');

describe('tweet routes', () => { 
    
  //GET route from our db
  it('gets a single tweet', () => {  
    return request(app)
      .get('/api/v1/tweets')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tweet_text: expect.any(String),
          approved: 'false',
          has_tweeted: 'false',
          __v: 0
        });
      });
  });

  it('gets all tweets', () => {
    return request(app)
      .get('/api/v1/tweets')
      .then(res => {
        expect(res.body).toContainEqual({
          _id: expect.any(String),
          tweet_text: expect.any(String),
          approved: 'false',
          has_tweeted: 'false',
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

