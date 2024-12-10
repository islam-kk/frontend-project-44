const getRandomNumber = () => {
  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const randomNumber = randomIntFromInterval(1, 100);

  return randomNumber;
};

export default getRandomNumber;
