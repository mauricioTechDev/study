// https://www.codewars.com/kata/6066ae080168ff0032c4107a/train/javascript

function maxSumBetweenTwoNegatives(a) {
    let max = -1, between = false;
  a.reduce((sum, num)=>{
    if (num >= 0) return sum += num;
    max = between && sum > max ? sum : max;
    between = true;
    return sum = 0; 
  }, 0)
  return max

}
