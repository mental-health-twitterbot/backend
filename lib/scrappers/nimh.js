const { initPage } = require('./helper');

const nimh = () => {
  
  return initPage('https://www.nimh.nih.gov/health/statistics/mental-illness.shtml')
    .then(document => {
     
      return document.querySelectorAll('.ul_default li').map(content => content.text);
    });
};

module.exports = { nimh }; 
