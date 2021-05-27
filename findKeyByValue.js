const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = (obj, value) => {
  for (let keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Modern Family"), undefined);