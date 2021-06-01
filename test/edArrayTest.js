const assert = require('chai').assert;
const _   = require('../index');

describe("#EqualArray" , () => {
  it("It should return true when equalArray([],[])" , () => {
    assert.strictEqual(_.eqArrays([],[]),true);
  })
  it("It should return true when equalArray([1,2,3],[1,2,3])" , () => {
    assert.strictEqual(_.eqArrays([1,2,3],[1,2,3]),true);
  })
  it("It should return false when equalArray([1,2,'3'],[1,2,3])" , () => {
    assert.strictEqual(_.eqArrays([1,2,'3'],[1,2,3]),false);
  })
})