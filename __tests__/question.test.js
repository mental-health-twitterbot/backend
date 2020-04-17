const { getQuestion } = require('../db/db-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  
  it('gets a proficient programmer', () => {
    return request(app)
      .get('/api/v1/programmer')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Josh Ford',
          available: true,
          __v: 0
        });
      });
  });
});

