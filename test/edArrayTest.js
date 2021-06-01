const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays([1,2,4],[1,2,4]), true);
// assertEqual(eqArrays(['hello', 'lighthouse', 1],['hello'], 'lighthouse', '1'), false);

describe("#EqualArray" , () => {
  it("It should return true when equalArray([],[])" , () => {
    assert.strictEqual(eqArrays([],[]),true);
  })
  it("It should return true when equalArray([1,2,3],[1,2,3])" , () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]),true);
  })
  it("It should return false when equalArray([1,2,'3'],[1,2,3])" , () => {
    assert.strictEqual(eqArrays([1,2,'3'],[1,2,3]),false);
  })
})