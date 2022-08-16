
https://www.hackerrank.com/challenges/picking-numbers/problem
/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    const arr = Array(101).fill(0)
    let max = 0

    for (let val of a){
     arr[val] += 1;
    }
    // console.log({arr})

    for (let i = 0; i < a.length; i+=1){
        console.log(arr[i] + arr[i + 1])
     max = Math.max(max, arr[i] + arr[i + 1]);   
    }
    
    return max
}
