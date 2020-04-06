const fetch = require('node-fetch');
const html = require('node-html-parser');

// fetch('https://www.who.int/news-room/facts-in-pictures/detail/mental-health')
//   .then(res => res.text())
//   .then(text => html.parse(text))
//   .then(document => {
//     console.log(document.querySelectorAll('h4').map(content => content.text));
//   });


// fetch('https://www.nami.org/Learn-More/Mental-Health-By-the-Numbers')
//   .then(res => res.text())
//   .then(text => html.parse(text))
//   .then(document => {
//     console.log(document.querySelectorAll('.content li').map(content => content.text));
//   });
//html.querySelectorAll('.pi-data-label').map(label => label.structuredText);

//NAMI - know the warning signs page
//trying to get the video link 
// fetch('https://www.nami.org/Learn-More/Know-the-Warning-Signs')
//   .then(res => res.text())
//   .then(text => html.parse(text))
//   .then(document => {
//     console.log(document.querySelector('a href').map(content => content.text));
//   });

// the warning signs
// fetch('https://www.nami.org/Learn-More/Know-the-Warning-Signs')
//   .then(res => res.text())
//   .then(text => html.parse(text))
//   .then(document => {
//     console.log(document.querySelectorAll('.content li').map(content => content.text));
//   });

//where to get help
// fetch('https://www.nami.org/Learn-More/Know-the-Warning-Signs')
//   .then(res => res.text())
//   .then(text => html.parse(text))
//   .then(document => {
//     console.log(document.querySelectorAll('.content p').map(content => content.text));
//   });

//ADHD
//each mental health disoder have symptoms, causes, dianosis, treatment and related conditions. and disccusions board 
//move from return if only has one word . filter()
//things to exclude: h2, pTags w/ semicolon
fetch('https://www.nami.org/Learn-More/Mental-Health-Conditions/ADHD')
  .then(res => res.text())
  .then(text => html.parse(text))
  .then(document => {
    console.log(document.querySelectorAll('.overview-content p,li').map(content => content.structuredText).filter(content => content === 'h2'));
  });

