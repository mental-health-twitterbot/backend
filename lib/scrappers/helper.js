// this is our helper function that initiates the fetch call
const fetch = require('node-fetch');
const html = require('node-html-parser');

const initPage = (url) => {
  return fetch(url)
    .then(res => res.text())
    .then(text => html.parse(text));
};

module.exports = { initPage };
// could transition to async if need be
