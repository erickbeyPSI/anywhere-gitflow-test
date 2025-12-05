/**
 * Generates a random number between min (inclusive) and max (exclusive).
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function test(words) {
  return words + "this is added text";
}

function iNeedAnotherCommit() {
  return "This is a commit";
}

console.log(getRandomNumber(1, 100));
console.log(test("a string of words"));
console.log(iNeedAnotherCommit());
