//scraper functions that return facts as an array of strings
const { who, whoMentalDisorder, whoSchizophrenia } = require('../lib/scrapers/who');
const { eatingRecoveryCenter } = require('../lib/scrapers/eatingRecoveryCenter');
const { hopeForDepression } = require('../lib/scrapers/hopeForDepression');
const { anxietyDisorder } = require('../lib/scrapers/ADAA');
const { anxietyFacts } = require('../lib/scrapers/promisesbehavioral');
const { nimh } = require('../lib/scrapers/nimh');
const { nami } = require('../lib/scrapers/nami');
const { self } = require('../lib/scrapers/self');

const Fact = require('../lib/models/Fact');
const Question = require('../lib/models/Question');
const Hashtag = require('../lib/models/Hashtag');

const questionData = require('../db/question-seed');
const hashtagData = require('../db/hashtag-seed');

module.exports = async() => {
  const facts = await Promise.all([
    eatingRecoveryCenter(),
    whoMentalDisorder(),
    hopeForDepression(),
    whoSchizophrenia(),
    anxietyDisorder(),
    anxietyFacts(),
    nimh(),
    nami(), 
    self(), 
    who()
  ]);
  const flatFacts = facts.flat(Infinity);
  const tweetableFacts = flatFacts.filter(fact => fact.length < 250 && fact.length > 0);
  const factPromise = Fact.create(tweetableFacts.map(fact => ({ 
    fact_text: fact,
    has_tweeted: false
  })));
 
  const questionPromise = Question.create(
    questionData.map(question => ({
      question_text: question.question
    })));

  const hashtagPromise = Hashtag.create(
    hashtagData.map(hashtag => ({
      hashtag: hashtag.hashtag,
      hashtag_type: hashtag.type
    })));
  return Promise.all([factPromise, questionPromise, hashtagPromise]);
};
  
// source, and other not required props we can keep off for now

