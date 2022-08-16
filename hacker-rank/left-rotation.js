https://www.hackerrank.com/challenges/array-left-rotation/problem

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    while(d > 0){
        let temp = arr.shift()
        arr.push(temp)
        d-=1
    }
    return arr

}
