// https://www.hackerrank.com/challenges/minimum-distances/problem

// Complete the minimumDistances function below.
function minimumDistances(a) {
    // Check if there are duplicates if not return -1
    let setObj = new Set(a);
    let filteredA = [...setObj];
    if(filteredA.length === a.length) return -1;
    
    // create object with values of distance and get min 
    let map = {}
    let currentVal = 0;
    
    for(let i = 0; i < a.length; i++){
        if(map[a[i]]){
            currentVal = map[a[i]][0]
            map[a[i]][1] = i - currentVal
        } else {
            map[a[i]] = [i, Number.POSITIVE_INFINITY];
        }
    }
    
    let minVal = Number.POSITIVE_INFINITY;
    
    for(const el in map){
        if(map[el][1] <= minVal){
            minVal = map[el][1];
        }
    }
    return minVal

}
