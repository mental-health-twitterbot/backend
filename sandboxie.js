const { self } = require('./lib/scrappers/self');

self()
  .then(data => console.log(data));
