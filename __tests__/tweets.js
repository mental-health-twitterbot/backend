const request = require('supertest');
const app = require('../lib/app');
const { getTweet } = require('../db/db-helpers');

describe('tweet routes', () => { 
    
  //GET route from our db
  it('geta a tweet', async() => {
    const tweet = await getTweet();

    return request(app)
      .get('/api/v1/tweets')
      .then(res => {
        expect(res.body).toEqual({
          ...tweet
        });
      });
  });

  //POST route to Twitter API

});
