https://www.hackerrank.com/challenges/mars-exploration/problem

/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    let count = 0;
    for(let i = 0; i <= s.length - 3; i+=3){
        if(s[i] !== 'S'){
            count+=1
        }
        if(s[i+1] !== 'O'){
            count+=1
        }
        if(s[i+2] !== 'S'){
            count+=1
        }
    }
    return count
}
