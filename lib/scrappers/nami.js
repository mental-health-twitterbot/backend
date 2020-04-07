const { initPage } = require('./helper');

const nami = () => {

  return initPage('https://www.nami.org/Learn-More/Mental-Health-By-the-Numbers')
    .then(document => {
      return document
        .querySelectorAll('.content li')
        .map(content => 
          content.text = content.text
            .replace(/(\r\n|\n|\r|\t)/gm, '')
        );
    });
};

module.exports = { nami }; 




