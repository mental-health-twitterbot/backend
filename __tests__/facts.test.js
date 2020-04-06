const request = require('supertest');
const app = require('../lib/app');
const { getFact, getFacts } = require('../db/db-helpers');

describe('fact routes', () => {
  it('gets all facts', async() => {
    const facts = await getFacts();

    return request(app)
      .get('/api/v1/facts')
      .then(res => {
        expect(res.body).toEqual(facts);
      });
  });

}); 



//FACT ROUTES

//GET ALL facts
//GET Facts by hashtag type


