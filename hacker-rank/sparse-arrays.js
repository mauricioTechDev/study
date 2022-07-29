https://www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(strings, queries) {
    // Write your code here
    let dict = {};
    for(const word of strings){
        if(dict[word]){
            dict[word]+=1
        } else {
            dict[word] = 1
        }
    }
    
    const ansArr = []
    
    for(const word of queries){
        if(dict[word]){
            ansArr.push(dict[word])
        } else {
            ansArr.push(0)
        }
    }
    return ansArr;
}
