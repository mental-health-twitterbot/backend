const { initPage } = require('./helper');

const nimh = () => {
  
  return initPage('https://www.nimh.nih.gov/health/statistics/mental-illness.shtml')
    .then(document => {
     
      return document.querySelectorAll('.ul_default li').map(content => content.text);
    });
};
// maybe use .split at the period to break apart sentences

// sentences on stress and ways to cope (kind of advice like so not sure if we want to use)
const nimhStress = () => {
  
  return initPage('https://www.nimh.nih.gov/health/publications/stress/index.shtml')
    .then(document => {
     
      return document.querySelectorAll('.ul_default li').map(content => content.text);
    });
};

module.exports = { nimh, nimhStress }; 
