const request = require('supertest');
const app = require('../lib/app');
const { getTweet } = require('../db/db-helpers');

describe('tweet routes', () => { 
    
  //GET route from our db
  it('gets a tweet', () => {
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

  //POST route to Twitter API

});
