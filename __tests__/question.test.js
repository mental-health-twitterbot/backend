const { getQuestion } = require('../db/db-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {


  it('gets a random question', () => {
    return request(app)
      .get('/api/v1/question')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          question_text: expect.any(String),
          __v: 0
        });
      });
  });
});

