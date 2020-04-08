const { Router } = require('express');
const Hashtag = require('../models/Hashtag');

module.exports = Router()
  .get('/', (req, res, next) => {
    Hashtag
      .find(req.query)
      .then(hashtag => res.send(hashtag))
      .catch(next);
  });
