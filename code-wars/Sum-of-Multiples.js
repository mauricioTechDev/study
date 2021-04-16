// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}
