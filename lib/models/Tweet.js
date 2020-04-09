const mongoose = require('mongoose');
const app = require('../app');
const request = require('supertest');

const schema = new mongoose.Schema({
  tweet_text: {
    type: String,
    required: true
  },
  approved: {
    type: Boolean,
    required: true
  },
  has_tweeted: {
    type: Boolean, 
    required: true
  }
});

schema.statics.generate = async function(n = 5){
  //gets all the hashtags
  const hashtags = await this.model('Hashtag').find();
  //gets facts that are under a specific length
  const facts = await this.model('Fact')
    .find({ 
      has_tweeted: false,
      $where: 'this.fact_text.length < 220'
    })
    //only returns the amount of facts we declare on line 20
    .limit(n);
  
  //pairs questions with facts based on length
  //we need promise, because its returning ALL of our facts
  const questions = await Promise.all(facts.map(fact => {
    return this.model('Question')
      .random(260 - fact.fact_text.length);
  }));

  //gets only 'general' hashtags using filter then we added a .map for some reason lol... 
  const generals = hashtags
    .filter(({ hashtag_type }) => hashtag_type === 'general')
    .map(({ hashtag }) => hashtag); //ask RYAN!

  const keywords = hashtags
    .filter(({ hashtag_type }) => hashtag_type === 'keyword')
    .map(({ hashtag }) => hashtag);

  //now lets build those tweets!!!
  const tweets = facts.map((fact, i) => {
    //gets a random general tweet
    const general = generals[
      Math.floor(Math.random() * generals.length)
    ];
    //matches a keyword hashtag by comparing our keyword hashtag array to the curr fact text 
    const keyword = keywords
      .find(keyword => fact.fact_text
        .toLowerCase()
        .includes(keyword.toLowerCase()));
    return {
      //concatenate the tweet and using a turnary add keyword hashtag if one was found
      tweet_text: `${fact.fact_text} ${questions[i].question_text} #${general} ${keyword ? '#' + keyword : ''}`,
      approved: false,
      has_tweeted: false
    };
  });
  // put those sweet tweets in the db! :)
  return this.create(tweets);
};
module.exports = mongoose.model('Tweet', schema);




