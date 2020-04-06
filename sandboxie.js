const { nimhStress } = require('./lib/scrappers/nimh');

nimhStress()
  .then(data => console.log(data));
