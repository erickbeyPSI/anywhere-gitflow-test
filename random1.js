/**
 * Generates a random number between min (inclusive) and max (exclusive).
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(1, 100));
