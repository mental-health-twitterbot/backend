What is our goal?

  * educational awareness
      - fact / nugget of knowledge

  * starting a conversation w/ community
      - prompting interactivity through a question tweet
      - ability for users to share stories
           * help spark conversations
      - responding to tweets *stretch*

Data Acquisition / HOW are we going to get it?
  * Four Main Data Resource Sites
      -nami.org
      -nimh.nih.gov
      -bbrfoundation.org
      -translifeline.org

MVP
-------
* A twitter bot that tweets out informational / engaging tweets regarding mental health
* Web scrapers that will auto populate our DB and email suggestions for tweets
* Retweet established / accredited account posts
      -@NAMICommunicate
      -@EndTheStigma
      -@Rethink_
      -@NAMIAdvocacy
      ...etc

{ Models }
  Tweet  (api req)
      text: 280 characters
          - hashtag (required)
          - link (not required)

Data Objects
---------------
# FactSchema

  fact: {
    text:
    source:
    source_url:
    site_timestamp:
  }
  hashtags:
  has_tweeted:

# QuestionSchema
    question:
    has_tweeted:
    hashtags:
    img_url:


Data Object Str          
  *stretch*
  @ Reply to users
  Simple front end for data display (Chart.js)

{ Routes }
  Post - tweet
  Post - re-tweet (function?)
  Delete - tweet
  Get - all tweets?
  Get - comments by tweet:id (populate that virtual)

*** what technologies will we be using ***
    - twit (twitter client)
    - cherio (web scraper)
    - node-html-parser (web scraper)
    - node-fetch (web scraper)
    - chart.js (frontend)

************ scraper example code **************

    const fetch = require('node-fetch');
    const html = require('node-html-parser')

    fetch('https://www.nami.org/Learn-More/Mental-Health-By-the-Numbers')
      .then(res => res.text())
      .then(text => html.parse(text))
      .then(document => {
        console.log(document.querySelector('li'));
      });

start breaking up work into small pieces  
what could you demo on each chunk?
