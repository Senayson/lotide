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

const assertArrayEqual = function(original, comparison, expectedReturn) {
  if (eqArrays(original, comparison) === expectedReturn) {
    console.log(`✅✅✅Assertion passed: ${original} === ${comparison}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${original} !== ${comparison}`);
  }
};
assertArrayEqual([1,2,3],[1,2,4],false);
assertArrayEqual([1,2,4], [1,2,4], true);
assertArrayEqual(['hello', 'goodbye'], ['hello', 'goodbye'], true);