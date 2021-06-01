const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let newSource = [];
  for(let i = 0; i < source.length; i++){
   for(let j = 0; j < itemsToRemove.length; j++){
    if(source[i] === itemsToRemove[j]){
      break;
    }
    if(j === itemsToRemove.length - 1) {
      newSource.push(source[i]);
    }
   }
   
  }
  return newSource;
}
const source = [1,2,4,6]
const itemsToRemove = [2,4]
assertArraysEqual(without(source,itemsToRemove), [1,6]);
