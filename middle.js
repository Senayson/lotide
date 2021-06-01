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
module.exports = middle;


