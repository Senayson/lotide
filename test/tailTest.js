const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#Tail", () => {
  it('It should return ["Lighthouse", "Labs"]for ["Hello", "Lighthouse", "Labs"] ',() => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"] );
  } )
  it('It should return [] for [1] ',() => {
    assert.deepEqual(tail([1]), [] );
  } )
  it('It should return [] for [] ',() => {
    assert.deepEqual(tail([]), [] );
  } )
})
