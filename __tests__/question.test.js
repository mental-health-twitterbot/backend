const { getActor, getActors } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {


  it('gets a question', () => {
    return request(app)
      .post('/api/v1/actor')
      .send({
        name: 'Mr. Bean',
        dob: '02/19/1982',
        pob: 'Milwaukee, WI'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Mr. Bean',
          dob: expect.any(String),
          pob: 'Milwaukee, WI',
          __v: 0
        });
      });
  });

  

});

