const { initPage } = require('./helper');

const anxietyFacts = () => {
  
  return initPage('https://www.promisesbehavioralhealth.com/addiction-recovery-blog/facts-about-anxiety-disorders/')
    .then(document => {
     
      return document.querySelectorAll('.entry-content li').map(content => content.structuredText);
    });
};

module.exports = { anxietyFacts }; 
