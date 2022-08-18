https://www.hackerrank.com/challenges/closest-numbers/problem#:~:text=Sorting%20is%20useful%20as%20the,smallest%20absolute%20difference%20between%20them.
/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    
    let map = {};
    
    for(let i = 0; i < arr.length - 1; i+=1){
        let diff = arr[i+1] - arr[i];
        let subArr = [arr[i], arr[i+1]]
        
        if(map[diff]){
            map[diff].push(subArr)
        } else {
            map[diff] = [subArr];
        }
    }
    
    let keys = Object.keys(map);
    let min = Number.POSITIVE_INFINITY;
    
    for(const key of keys){
        let num = Number(key)
        if(num < min){
            min = num;
        }
    }
    
    return map[min].flat()
}
