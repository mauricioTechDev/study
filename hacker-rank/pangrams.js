https://www.hackerrank.com/challenges/pangrams/problem

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let letterLength = letters.length;
    let lettersMap = {}
    for(const letter of letters){
        lettersMap[letter] = 0;
    }
    
    let letterCount = 0
    
    for(const letter of s){
        let lowerCase = letter.toLowerCase();
        if(lettersMap[lowerCase] === 0){
            lettersMap[lowerCase] = 1
            letterCount+=1
        }
    }
    
    return letterLength <= letterCount ? 'pangram' : 'not pangram'

}
