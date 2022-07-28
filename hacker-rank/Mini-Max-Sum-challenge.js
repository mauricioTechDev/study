https://www.hackerrank.com/challenges/mini-max-sum/problem

// time O(n log n)
function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b)
    let min = 0
    let max = 0
        
    for(let i = 0; i < arr.length - 1; i+=1){
        min += arr[i]
    }
    
    for(let i = 1; i < arr.length; i+=1){
        max += arr[i]
    }
    console.log(`${min} ${max}`)
    
}

// better O(n)
function miniMaxSum(arr) {
    // Write your code here
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let totalSum = 0
    
    for(const number of arr){
        min = Math.min(min, number);
        max = Math.max(max, number);
        totalSum+=number
    }
    
    let minAns = totalSum - max;
    let maxAns = totalSum - min;
    console.log(`${minAns} ${maxAns}`)
    
 
}
