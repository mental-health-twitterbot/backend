const fetch = require('node-fetch');
const html = require('node-html-parser');

fetch('https://www.nami.org/Learn-More/Mental-Health-By-the-Numbers')
  .then(res => res.text())
  .then(text => html.parse(text))
  .then(document => {
    console.log(document.querySelectorAll('.content li').map(content => content.text)[4]);
  });
//html.querySelectorAll('.pi-data-label').map(label => label.structuredText);
