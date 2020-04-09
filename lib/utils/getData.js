const request = require('supertest');
const app = require('../lib/app');

const getAllFacts = () => {
  
  return request(app)
    .get('/api/v1/facts');
};

const getQuestion = () => {
  return request(app)
    .get('/api/v1/question');
};

module.exports = { getAllFacts };
