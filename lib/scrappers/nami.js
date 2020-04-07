const { initPage } = require('./helper');


const namiByTheNumbers = () => {

const nami = () => {

  
  return initPage('https://www.nami.org/Learn-More/Mental-Health-By-the-Numbers')
    .then(document => {
     
      return document.querySelectorAll('.content li').map(content => content.text);
    });
};


module.exports = { namiByTheNumbers }; 


module.exports = { nami }; 

//NAMI - know the warning signs page
//trying to get the video link 
// fetch('https://www.nami.org/Learn-More/Know-the-Warning-Signs')
//   .then(res => res.text())
//   .then(text => html.parse(text))
//   .then(document => {
//     console.log(document.querySelector('a href').map(content => content.text));
//   });



