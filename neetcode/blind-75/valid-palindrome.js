https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let firstCharCode = 'a'.charCodeAt(0)
    let lastCharCode = 'z'.charCodeAt(0)
    let spaceCharCode = ' '.charCodeAt(0)
    
    let arr = s.split('')
    
    let filteredArr = arr.map((el) => {
        let lowerCase = el.toLowerCase()
        let formatedEl = lowerCase.charCodeAt(0)
        if(formatedEl >= firstCharCode && formatedEl <= lastCharCode){
            return lowerCase;
        } else if(formatedEl === spaceCharCode){
            return ''
        } else if (Number(lowerCase) == lowerCase) {
            console.log(lowerCase)
            return lowerCase
        } else {
            return ''
        }
    })
    
    return filteredArr.join('') === filteredArr.reverse().join('')
    
};
