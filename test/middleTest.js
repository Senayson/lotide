const assert = require('chai').assert;
const middle = require('../middle');

describe("#Middle", () => {
it("#It returns [] for [5]", ()=>{
  assert.deepEqual(middle([5]),[] );
})
it("#It returns [3] for [1,2,3,4,5]", ()=>{
  assert.deepEqual(middle([1,2,3,4,5]),[3] );
})
it("#It returns [3,4] for [1,2,3,4,5,6]", ()=>{
  assert.deepEqual(middle([1,2,3,4,5,6]),[3,4] );
})
});