// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(arrr) { // curry(f) does the currying transform
  return function(num) {
    if(arrr === []) return [];
    return arrr.map(el => el*num);
  };
}
