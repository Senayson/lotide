const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {

  for(let key in obj){
    if(callback(obj[key])){
      return key;
    }
  } 
  return undefined;
};

module.exports = findKey;

const names = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
findKey(names, x => x.stars === 2) // => "noma"

assertEqual(findKey(names, x => x.stars === 3),"Akaleri");
