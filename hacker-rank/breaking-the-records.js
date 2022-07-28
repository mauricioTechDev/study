https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let minScore = scores[0]
    let maxScore = scores[0]
    
    let minMaxCount = [0, 0]
    
    for(let i = 1; i < scores.length; i+=1){
        if(scores[i] > maxScore){
            minMaxCount[0]+=1;
            maxScore = scores[i];
        }
        if(scores[i] < minScore){
            minMaxCount[1]+=1;
            minScore = scores[i];
        }
    }
    return minMaxCount;
}
