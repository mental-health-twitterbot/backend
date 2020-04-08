const { initPage } = require('../utils/helper');

const hopeForDepression = () => {
  
  return initPage('https://www.hopefordepression.org/depression-facts/')
    .then(document => {
      return document
        .querySelectorAll('#post-5 li')
        .map(content => 
          `Depression ${
            content.text
              .toLowerCase()
              .replace('*', '')
              .replace('*', '')
          }`);
    });
};

module.exports = { hopeForDepression }; 
