// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
// d = sum and m = length
    let count = 0
  for (let i = 0; i < s.length; i++) {
    let c = s.slice(i, i + m);
    // if c the size of m and d equals c's sum then keep it
    if((c.length === m) && (d === c.reduce((a, p) => p + a, 0))){
      count++
    }
  }
  return count;
    

}
