// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?h_r=next-challenge&h_v=zen

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
let string = ''
let revString = ''
let num = 0
let diff = 0
let count = 0

while(i <= j){
    string = i.toString();
    revString = string.split('').reverse().join('');
    num = +revString;
    diff = i -num
    if(diff%k === 0){
        count++
    }
    i++
    
}
return count;

}

