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

const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
const num = [1, 2, [3, 4], 5, ['eh']]
console.log(flatten(num));

assertArrayEqual(flatten(num),[1,2,3,4,5,'eh'], true);