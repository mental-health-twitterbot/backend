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

  it('gets a fact by hashtag type', async() => {
    
    return request(app)
      .get('/api/v1/facts/types')
      .then(res => {
        expect(res.body).toContainEqual({
          _id: expect.any(String),
          facts: expect.any(Array) 
        });
      });
  });

}); 



//FACT ROUTES

//GET ALL facts
//GET Facts by hashtag type


