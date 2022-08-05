https://www.hackerrank.com/challenges/migratory-birds/problem

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let mem = {}
    let maxSiting = 0
    let mostFreqBird = 0
    
    for(const id of arr){
        if(mem[id]){
            mem[id]+=1
            if(mem[id] === maxSiting){
                mostFreqBird = Math.min(mostFreqBird, id)
            }
            if(mem[id] > maxSiting){
                maxSiting = mem[id]
                mostFreqBird = id
            } 
        } else {
            mem[id] = 1
            if(mem[id] > maxSiting){
                maxSiting = mem[id]
                mostFreqBird = Math.min(mostFreqBird, id)
            }
        }
    }
    return mostFreqBird
}
