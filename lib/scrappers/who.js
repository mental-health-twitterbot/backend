const { initPage } = require('./helper');

const who = () => {
  
  return initPage('https://www.who.int/news-room/facts-in-pictures/detail/mental-health')
    .then(document => {
     
      return document.querySelectorAll('h4').map(content => content.text);
    });
};

module.exports = { who }; 

//html.querySelectorAll('.pi-data-label').map(label => label.structuredText);
