// https://www.codewars.com/kata/570a6a46455d08ff8d001002

function noBoringZeros(n) {
  // your code
  if(n === 0) return 0
  let arr = n.toString().split('')
  let stringLength = arr.length;
  
  for(let i = stringLength - 1; arr.length > 0; i--){
    if(arr[i] !== '0'){
      return +arr.join('')
    }
    if(arr[i] === '0'){
      arr.pop()
    }
  }
  
}
