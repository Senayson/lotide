const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let elem of item) {
        newArr.push(elem);
      }
    }
    else {
      newArr.push(item);
    }
  }
  return newArr;
};

module.exports = flatten;
const num = [1, 2, [3, 4], 5, ['eh']]
console.log(flatten(num));

//assertArraysEqual(flatten(num),[1,2,3,4,5,'eh'], true);