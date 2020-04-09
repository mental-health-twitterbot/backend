const { Router } = require('express');
const Fact = require('../models/Fact');

module.exports = Router()
  .get('/', (req, res, next) => {
    Fact
      .find()
      .then(facts => res.send(facts))
      .catch(next);
  });
  
