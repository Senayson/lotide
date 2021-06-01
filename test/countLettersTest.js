const assert = require('chai').assert;
const countLetters   = require('../countLetters.js');

describe("#CountLetters", () => {
  it("It returns {s:1, e:1, n:1, a:1, y:1} for 'senay'", () => {
    assert.deepEqual(countLetters('senay'), {s:1, e:1, n:1, a:1, y:1});
  });

  it("returns {} for '' ", () => {
    assert.deepEqual(countLetters(''), {}); 
  });
});