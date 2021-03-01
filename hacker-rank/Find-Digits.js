// https://www.hackerrank.com/challenges/find-digits/problem

// Complete the findDigits function below.
function findDigits(n) {
    let count = 0
    let arr = n.toString().split('');
    let num;
    
    for(let i = 0; i < arr.length; i++){
        num = +arr[i];
        if(n%num === 0){
            count++;
        }
    }
    
    return count;
}
