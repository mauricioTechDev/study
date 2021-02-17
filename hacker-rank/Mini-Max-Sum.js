// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    let sort = arr.sort((a,b) => a - b)
    let min = sort[0] + sort[1] + sort[2] +sort[3] 
    let max = sort[1] + sort[2] + sort[3] +sort[4] 
    
    console.log(min, max)
}
