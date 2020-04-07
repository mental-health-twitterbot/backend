const { initPage } = require('./helper');

const who = () => {
  
  return initPage('https://www.who.int/news-room/facts-in-pictures/detail/mental-health')
    .then(document => {
     
      return document.querySelectorAll('h4').map(content => content.text);
    });
};

const whoMentalDisorder = () => {
  
  return initPage('https://www.who.int/news-room/fact-sheets/detail/mental-disorders')
    .then(document => {
     
      return document.querySelectorAll('.list-bold li').map(content => content.text);
      
    });
};
const whoSchizophrenia = () => {
  
  return initPage('https://www.who.int/news-room/fact-sheets/detail/schizophrenia')
    .then(document => {
     
      return document.querySelectorAll('.list-bold li')
        .map(content => content.text
          .replace('(1).', '.')
          .replace('(2).', '.'));
      
    });
};

module.exports = { who, whoMentalDisorder, whoSchizophrenia }; 

//html.querySelectorAll('.pi-data-label').map(label => label.structuredText);


