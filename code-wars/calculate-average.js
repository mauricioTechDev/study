// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(array) {
  let sum = 0
  let length = array.length;
  
  array.forEach((el) => sum+=el);
  
  return sum/length;
}
