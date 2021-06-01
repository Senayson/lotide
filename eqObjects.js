const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let item of obj1) {

    if (Array.isArray(object1[item])) {
      return eqArrays(object1[item], object2[item]);
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};
module.exports = eqObjects;

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);