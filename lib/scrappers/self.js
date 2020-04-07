const { initPage } = require('./helper');

const self = () => {
  
  return initPage('https://www.self.com/story/bipolar-disorder-facts')
    .then(document => {
     
      return document.querySelectorAll('.grid--item .heading-h3')
        .map(content => content.text
          .replace(/\d/g, '')
          .replace('. ', ''));
    });
};

module.exports = { self }; 
