 // https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript 

function countLettersAndDigits(input) {
  let count = 0;
  input.split('').forEach(el => {
    if(+el === +el){
      console.log(el)
      count++
    }
    if((/[a-z][A-Z]/).test(el)){
      count++
    }
  })
  
  return count
}
