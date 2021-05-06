//  https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript

function average(scores) {
  const numSum = scores.reduce((acc, curr) => acc + curr);
  const len = scores.length;
  
  return Math.round(numSum/len);
}
