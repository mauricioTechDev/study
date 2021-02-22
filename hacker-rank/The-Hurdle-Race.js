// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
    let maxNum = Math.max(...height);
    
    return maxNum > k ? maxNum - k : 0

}
