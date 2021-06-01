const assert = require('chai').assert;
const _   = require('../index');

describe("#eqObjects", () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] }
  it("#It returns True for eqObjects(cd, dc)", ()=>{
    assert.deepEqual(_.eqObjects(cd, dc),true);
  })
  it("#It returns False for eqObjects(cd, cd2)", () => {
    assert.deepEqual((_.eqObjects(dc, cd2)), false);
  })

  });