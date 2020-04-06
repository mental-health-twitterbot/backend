const chance = require('chance').Chance();
const Question = require('../lib/models/Question');

module.exports = async({ exampleToCreate = 10, questionToCreate = 10 } = {}) => {

  // const example = await Example.create([...Array(exampleToCreate)].map(() => ({
  //   name: `${chance.animal()} Studios`, 
  //   address: {
  //     city: chance.city(),
  //     state: chance.state(),
  //     country: chance.pickone()
  //   }
  // })));

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

  const questions = await Question.create([...Array(questionToCreate)].map(() => ({
    question: chance.pickone(staticQuestions),
    type: chance.pickone(questionType)  
    }
  })));


};

