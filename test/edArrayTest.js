const assertEqual = require('../assertEqual.js');

const eqArrays = require('../eqArrays.js');

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2,4],[1,2,4]), true);
assertEqual(eqArrays(['hello', 'lighthouse', 1],['hello'], 'lighthouse', '1'), false);