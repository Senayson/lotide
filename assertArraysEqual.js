const eqArrays = require('./eqArrays');

const assertArraysEqual = function(original, comparison) {
  if (eqArrays(original, comparison)) {
    console.log(`✅✅✅Assertion passed: ${original} === ${comparison}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${original} !== ${comparison}`);
  }
};

module.exports = assertArraysEqual;