https://www.hackerrank.com/challenges/caesar-cipher-1/problem

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function caesarCipher(s, k) {
    // Write your code here
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let map = {}
    for(const index in letters){
        map[letters[index]] = index;
    }
    let newString = ''
    let isUpper = false;    
    
    for(let i = 0; i < s.length; i+=1){
        // get index of current letter
        let check = s[i].toLowerCase();
        if(map[check] !== undefined){
            if(s[i].toLowerCase() !== s[i]){
                isUpper = true
            }
            let letterIndex = map[s[i].toLowerCase()];
            let newIndex = getIndex(Number(letterIndex), letters.length - 1, k);
            if(isUpper){
                newString += letters[newIndex].toUpperCase();        
            } else {
                newString += letters[newIndex];    
            }
            isUpper = false
        } else {
            newString+=s[i]
        }
    }
    return newString
}

const getIndex = (currentIndex, lettersLength, incrementer) => {
    let val = currentIndex;
    while(incrementer > 0){
        if(val < lettersLength){
            val+=1
        } else {
            val = 0
        }
        incrementer-=1
    }
    return val;
}
