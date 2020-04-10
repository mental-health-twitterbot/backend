const { Router } = require('express');
const Question = require('../models/Question');

module.exports = Router()

  .get('/', (req, res, next) => {
    Question
      .findOne()
      .then(questions => res.send(questions))
      .catch(next);
  });
  
