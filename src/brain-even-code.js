import readlineSync from 'readline-sync';
import getNameandGreet from './cli.js';
import getRandomNumber from './get-random-number.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = getNameandGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let roundsCount = 0;

  while (roundsCount < 3) {
    const randomNumber = getRandomNumber();
    let rightAnswer;

    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    const userAnswer = readlineSync.question(`Question: ${randomNumber}`);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      roundsCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      break;
    }

    if (roundsCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
