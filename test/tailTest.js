const assert = require('chai').assert;
const _   = require('../index');

describe("#Tail", () => {
  it('It should return ["Lighthouse", "Labs"]for ["Hello", "Lighthouse", "Labs"] ',() => {
    assert.deepEqual(_.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"] );
  } )
  it('It should return [] for [1] ',() => {
    assert.deepEqual(_.tail([1]), [] );
  } )
  it('It should return [] for [] ',() => {
    assert.deepEqual(_.tail([]), [] );
  } )
})
