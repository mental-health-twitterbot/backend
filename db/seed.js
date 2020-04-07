const chance = require('chance').Chance();
const Fact = require('../lib/models/Fact');
const Question = require('../lib/models/Question');
const Hashtag = require('../lib/models/Hashtag');
const Tweet = require('../lib/models/Tweet');

module.exports = async({ factsToCreate = 10, questionToCreate = 10, hashtagsToCreate = 20, tweetsToCreate = 15 } = {}) => {

  const staticQuestions = [
    'What\'s your experience with this?',
    'What do you think?',
    'Can you relate?',
    'How do you feel about this?',
    'Do you have a similar story?',
    'Do you or someone you know have experience?',
    'What do you think we can do to change this?',
    'How can we do things differently?',
    'What would you like to see change?'
  ];

  const hashtag_types = ['depression', 'anxiety', 'general', 'schizophrenia', 'adhd', 'bipolor', 'autism', 'ocd'];

  const tweetRefs = [Fact, Question];
  
  const questions = await Question.create([...Array(questionToCreate)].map(() => ({
    question_text: chance.pickone(staticQuestions),
  }
  )));

  const facts = await Fact.create([...Array(factsToCreate)].map(() => ({
    fact_text: chance.sentence(),
    source: `${chance.animal()} Institute`,
    source_url: chance.url(),
    site_timestamp: chance.timestamp(),
    hashtag_type: chance.pickone(hashtag_types),
    has_tweeted: chance.bool()
  })));

  const hashtags = await Hashtag.create([...Array(hashtagsToCreate)].map(() => ({
    hashtag: chance.hashtag(),
    hashtag_type:  chance.pickone(facts)._id
  })));
  
  const tweets = await Tweet.create([...Array(tweetsToCreate)].map(() => ({
    tweet: chance.pickone(facts._id, questions._id),
    onModel:chance.pickone(tweetRefs),
    hashtag: chance.pickone(hashtags)._id,
    has_tweeted: chance.bool()
  })));

};
