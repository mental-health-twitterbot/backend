const { Router } = require('express');
const Tweet = require('../models/question');

module.exports = Router()

//GET a tweet from our db
  .get('/', (req, res, next) => {
    Tweet
      .findOne()
      //populate using virtual name from Tweet model
      .populate('tweets')
      .then(tweet => res.send(tweet))
      .catch(next);
  });

//POST a tweet to the twitter api
