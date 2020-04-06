const chance = require('chance').Chance();
const Fact = require('../lib/models/Fact');
const Question = require('../lib/models/Question');

module.exports = async({ factsToCreate = 10, questionToCreate = 10 } = {}) => {


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
  ]

  const questionType = [
    'feel', 
    'relate', 
    'think', 
    'share',
    'act'
  ]
  
  const sources = ['NAMI', 'National Institute of Mental Health', 'Brain & Behavior Research Foundation', 'Trans Lifeline'];

  const source_urls = ['nami.org', 'nimh.nih.gov', 'bbrfoundation.org', 'translifeline.org']

  const questions = await Question.create([...Array(questionToCreate)].map(() => ({
    question: chance.pickone(staticQuestions),
    type: chance.pickone(questionType)  
    }
  })));

  const facts = await Fact.create([...Array(factsToCreate)].map(() => ({
    text: chance.sentence(),
    source: chance.pickone(sources),
    source_url: chance.pickone(source_urls),
    site_timestamp: chance.timestamp(),
    type: chance.pickone(questions)._id,
    has_tweeted: chance.bool()
  })));

};

