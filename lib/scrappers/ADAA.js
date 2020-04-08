const { initPage } = require('./helper');

const anxietyDisorder = () => {
  
  return initPage('https://adaa.org/understanding-anxiety')
    .then(document => {

      return document.querySelectorAll(' article ul')
        .map(content => content.structuredText.split('\n'));
    });
};

module.exports = { anxietyDisorder }; 
