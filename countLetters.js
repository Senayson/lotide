const assertEqual = require('./assertEqual.js');

const countLetters = function(str) {
  const result = {};

  for (let ch of str) {
    if (ch !== " ") {
      if (result[ch]) {
        result[ch] += 1;
      } else {
        result[ch] = 1;
      }
    }
  }
  return result;

};

module.exports = countLetters;
