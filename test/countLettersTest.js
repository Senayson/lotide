const assert = require('chai').assert;
const _   = require('../index');

describe("#CountLetters", () => {
  it("It returns {s:1, e:1, n:1, a:1, y:1} for 'senay'", () => {
    assert.deepEqual(_.countLetters('senay'), {s:1, e:1, n:1, a:1, y:1});
  });

  it("returns {} for '' ", () => {
    assert.deepEqual(_.countLetters(''), {}); 
  });
});