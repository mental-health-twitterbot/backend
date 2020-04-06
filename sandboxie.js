const { hopeForDepression } = require('./lib/scrappers/hopeForDepression');

hopeForDepression()
  .then(data => console.log(data));
