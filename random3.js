/**
 * Picks a random element from an array.
 * @param {Array} arr 
 * @returns {*}
 */
function getRandomElement(arr) {
  if (arr.length === 0) return undefined;
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(getRandomElement(fruits));
