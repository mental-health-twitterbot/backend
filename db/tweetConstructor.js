require('dotenv').config();
require('../lib/utils/connect')();
const request = require('supertest');
const app = require('../lib/app');

//get all those sweet sweet facts...
const allFacts = getAllFacts();

const preTweets = allFacts.map(fact =>{
  //get our keyword hashtags and general hashtags
  const keywordHash = getKeywordHash();
  const generalHash = getGeneralHash();
  //if fact is less than 220 characters... get a random question
  if(fact.length < 220){
    //get a random question
    let question = getQuestion();
    //if the question and fact is greater than 270 get a new one
    while(`${fact} ${question}`.length > 270) {
      question = getQuestion();   
    }
    const factQuestion = `${fact} ${question}`;
    //deconstruct the fact string into an array of single word strings
    //loop over words and .filter matching word in hashtag array (keywordHash)
    const hashMatches = factQuestion.split(' ').filter(word => keywordHash.includes(word));
    return `${factQuestion} #${hashMatches[0]} #${generalHash}`;
  } 
  const hashMatches = fact.split(' ').filter(word => keywordHash.includes(word));
  return `${fact} #${hashMatches[0]} #${generalHash}`;
});

//now concatonate all that!
const tweetResult = `${fact} ${question} #${keywordHash} #${generalHash}`;

//select one or two hashtags
//if less than 270 characters... get a general hashtag 


Tweet.create(tweetResult.map(tweet => ({ 
  tweet_text: tweet,
  has_tweeted: false
})));


//create a get route that will grab 5 random tweets from that has has_tweeted: false....

//once they are e-mailed... change the boolean how??? no clue


