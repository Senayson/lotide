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

const middle = function (array){
  let midIndex = Math.floor(array.length/2);
  //console.log(midIndex)
  let midArray = []
  if(array.length <= 2){
    return midArray;
  }
  if(array.length % 2 === 0){
    midArray.push(array[midIndex - 1]);
    midArray.push(array[midIndex]);
  } else {
    midArray.push(array[midIndex]);
  }
return midArray;
}
assertArrayEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArrayEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
assertArrayEqual(middle([1,2]), []);

