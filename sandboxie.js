const { eatingRecoveryCenter } = require('./lib/scrappers/eatingRecoveryCenter');

eatingRecoveryCenter()
  .then(data => console.log(data));
