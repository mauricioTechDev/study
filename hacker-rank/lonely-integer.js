// https://www.hackerrank.com/challenges/lonely-integer/problem

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let dict = {}
    
    for(const letter of a){
        if(dict[letter]){
            dict[letter]+=1
        } else {
            dict[letter] = 1
        }
    }
    
    for(const [key, value] of Object.entries(dict)){
        if(value === 1){
            return key;
        }
    }

}
