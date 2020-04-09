require('dotenv').config();
require('./lib/utils/connect')();
const Tweet = require('./lib/models/Tweet');
const weekly = require('./weekly');

// post 'approved' tweets daily and not yet tweeted and tweet it 
