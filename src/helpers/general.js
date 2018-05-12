export const getRandomElemFromArray = array => {
  if (array instanceof Array) {
    const randomIndex = getRandomInt(0, array.length-1);
    return array[randomIndex];
  }
};

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
