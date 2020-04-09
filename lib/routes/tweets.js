const { Router } = require('express');
const Tweet = require('../models/Tweet');

module.exports = Router()

//GETs the first tweet from our db
  .get('/', (req, res, next) => {
    Tweet
      .findOne()      
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Tweet
      .find()      
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .get('/approve/:id', (req, res, next) => {
    Tweet
      .findByIdAndUpdate(req.params.id, {
        approved: req.body.approved }, { new: true })
      .then(tweet => res.send(tweet))
      .catch(next);  
  });
 



//GET route /approval using findByIdandUpdate to switch approved false/true
//GET all route
