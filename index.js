const head = require('./head.js');
const tail = require('./tail.js');
const middle = require('./middle.js');
const flatten = require('./flatten.js');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const findKeys = require('./findKeys');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head : head,
  middle : middle,
  tail : tail,
  flatten : flatten,
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  assertObjectsEqual : assertObjectsEqual,
  countLetters : countLetters,
  countOnly : countOnly,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  findKeyByValue : findKeyByValue,
  findKeys : findKeys,
  letterPositions : letterPositions,
  map : map,
  takeUntil : takeUntil,
  without : without
};