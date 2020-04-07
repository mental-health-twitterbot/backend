const { initPage } = require('./helper');

const who = () => {
  
  return initPage('https://www.who.int/news-room/facts-in-pictures/detail/mental-health')
    .then(document => {
     
      return console.log(document.querySelectorAll('h4').map(content => content.text));
    });
};

const whoDepression = () => {
  
  return initPage('https://www.who.int/news-room/fact-sheets/detail/depression')
    .then(document => {
     
      return console.log(document.querySelectorAll('.list-bold li').map(content => content.text));
      
    });
};

module.exports = { who, whoDepression }; 


//html.querySelectorAll('.pi-data-label').map(label => label.structuredText);

