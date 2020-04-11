const { Router } = require('express');
const Tweet = require('../models/Tweet');

module.exports = Router()

  .get('/', (req, res, next) => {
    Tweet
      .find()      
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .get('/content', (req, res, next) => {
    Tweet
      .findOneAndUpdate({
        approved: true,
        has_tweeted: false
      },
      {
        has_tweeted: true
      }) 
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .get('/approve/:id', (req, res, next) => {
    Tweet
      .findByIdAndUpdate(req.params.id, {
        approved: true }, { new: true })
      .then(tweet => res.send(tweet))
      .catch(next);  
  });
 




