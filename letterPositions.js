const eqArrays = function(array1, array2) {
  if (array1 === undefined && array2 === undefined) {
    return true;
  }
  if (array1 === [] || array2 === [] || array1 === undefined || array2 === undefined) {
    return false;
  }
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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {

        results[sentence[i]].push(i);

      } else {
        results[sentence[i]] = [i];
      }

    }
  }
  return results;
};
const result = letterPositions('lighthouse in the house');
console.log(result);


assertArrayEqual(result[' '], undefined);

