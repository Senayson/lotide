// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;

//assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });