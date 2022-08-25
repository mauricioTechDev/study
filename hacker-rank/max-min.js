https://www.hackerrank.com/challenges/angry-children/problem


function maxMin(k, arr) {
    let min = 0;
    let max = 0;
    let unFairness = Number.POSITIVE_INFINITY
    arr.sort((a, b) => a - b)
    
    for(let i = 0; i <= arr.length - k; i+=1){
        min = arr[i];
        max = arr[i + k - 1];
        unFairness = Math.min(unFairness, max - min)
    }
    return unFairness
}
