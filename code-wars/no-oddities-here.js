// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

function noOdds( values ){
  // Return all non-odd values
  let ans = []
  values.map(el => {if(el%2 === 0) ans.push(el)})
  return ans
  
}
