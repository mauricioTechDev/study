// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}
