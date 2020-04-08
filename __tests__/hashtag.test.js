const request = require('supertest');
const app = require('../lib/app');
require('../db/db-helpers');

describe('hashtags route', () => {

  it('gets hashtags by type', () => {

    return request(app)
      .get('/api/v1/hashtags/?=depression')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          hashtag: expect.any(String),
          hashtag_type: expect.any(String)
        });
      });
  });
});
