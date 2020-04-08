const { initPage } = require('../utils/helper');

const nimh = () => {
  
  return initPage('https://www.nimh.nih.gov/health/statistics/mental-illness.shtml')
    .then(document => {
      const result = document.querySelectorAll('.ul_default li')
        .map(content => content.text
          .replace(/(\r\n|\n|\r|\t)/gm, '')
          .replace(/ +(?= )/g,'')
          .replace('AMI', 'Mental Illness')
          .replace('SMI', 'Serious Mental Illness')
          .split('. ')
        );
      return result.flat(Infinity);
    });
};

// sentences on stress and ways to cope (kind of advice like so not sure if we want to use)
// const nimhStress = () => {
  
//   return initPage('https://www.nimh.nih.gov/health/publications/stress/index.shtml')
//     .then(document => {
     
//       return document.querySelectorAll('.ul_default li')
//         .map(content => content.text);
//     });
// };

module.exports = { nimh }; 
