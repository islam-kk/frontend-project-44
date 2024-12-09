import getNameandGreet from '../src/cli.js';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  getNameandGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}
