const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(original, comparison) {
  if (eqArrays(original, comparison)) {
    console.log(`✅✅✅Assertion passed: ${original} === ${comparison}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${original} !== ${comparison}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const empty = [];
const wordMap = map(words, (word => word + "s"));
const emptyMap = map(empty, (word => word + "s"));
console.log(wordMap);

assertArrayEqual(wordMap, ["grounds", "controls", "tos", "majors", "toms"]);
assertArrayEqual(emptyMap, []);



