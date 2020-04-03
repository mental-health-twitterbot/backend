const fetch = require('node-fetch');
const html = require('node-html-parser');

fetch('https://www.nami.org/Learn-More/Mental-Health-By-the-Numbers')
  .then(res => res.text())
  .then(text => html.parse(text))
  .then(document => {
    console.log(document.querySelector('li'));
  });