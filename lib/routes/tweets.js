const { Router } = require('express');
const Tweet = require('../models/question');

module.exports = Router()

//GET a tweet from our db
  .get('/', (req, res, next) => {
    Tweet
      .findOne()
      .populate({
        path:'fact_tweet',
        select: 'fact_text'
      })
      .populate({
        path:'question_tweet',
        select: 'question_text'
      })
      .populate({
        path:'hashtag_tweet',
        select: 'hashtag'
      })
      .then(tweet => res.send(tweet))
      .catch(next);
  });

//POST a tweet to the twitter api
