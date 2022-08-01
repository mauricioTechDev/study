https://www.hackerrank.com/challenges/countingsort1/problem

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    
    let newArr = new Array(100).fill(0)
    
    for(const num of arr){
        newArr[num] = newArr[num] + 1
    }    
    return newArr;
}

