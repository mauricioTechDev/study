//  https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
  const checkIfBothEven = flower1%2 === 0 && flower2%2 === 0
  const checkIfBothOdd = flower1%2 !== 0 && flower2%2 !== 0
  
  if(flower1 == flower2) return false
  if(checkIfBothEven) return false
  if(checkIfBothOdd) return false
  
  return true
}
