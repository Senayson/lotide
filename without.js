const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(original, comparison) {
  if (eqArrays(original, comparison)) {
    console.log(`✅✅✅Assertion passed: ${original} === ${comparison}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${original} !== ${comparison}`);
  }
};

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
assertArrayEqual(without(source,itemsToRemove), [1,6]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(eqArrays(words, ["hello", "world", "lighthouse"]));

