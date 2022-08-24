https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function minimumAbsoluteDifference(arr) {
    let min = Number.POSITIVE_INFINITY;
    arr.sort((a, b) => a - b);
    
    for(let i = 0; i < arr.length - 1; i+=1){
        let currVal = Math.abs(arr[i] - arr[i + 1])
        min = Math.min(min, currVal);
    }
    
    return min;
}
