const { nimh } = require('./lib/scrappers/nimh');

nimh()
  .then(data => console.log(data));
