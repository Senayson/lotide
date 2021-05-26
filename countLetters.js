const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const result = {};

  for (let ch of str) {
    if (ch !== " ") {
      if (result[ch]) {
        result[ch] += 1;
      } else {
        result[ch] = 1;
      }
    }
  }
  return result;

};
const result = countLetters('lighthouse in the house');
assertEqual(result['i'], 2);
