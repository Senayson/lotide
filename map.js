const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;


const words = ["ground", "control", "to", "major", "tom"];
const empty = [];
const wordMap = map(words, (word => word + "s"));
const emptyMap = map(empty, (word => word + "s"));
console.log(wordMap);

assertArraysEqual(wordMap, ["grounds", "controls", "tos", "majors", "toms"]);
assertArraysEqual(emptyMap, []);



