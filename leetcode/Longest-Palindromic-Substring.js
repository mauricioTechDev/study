// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length < 2) return s
    let longestOne = '';
    let longestTwo = '';
    let tempLongest = '';
    let maxLongest = ''
    
    for(let i = 0; i < s.length; i++){
        longestOne = searchFromMiddle(s, i, i)
        longestTwo = searchFromMiddle(s, i, i+1)
        tempLongest = longestOne.length >= longestTwo.length ? longestOne : longestTwo;
        maxLongest = tempLongest.length >= maxLongest.length ? tempLongest : maxLongest;
    }
    
    return maxLongest
};

var searchFromMiddle = function(arr, left, right) {
    let currentPali = '';
    
    while(left >= 0 && right < arr.length && arr[left] === arr[right]){
        currentPali = arr.slice(left, right + 1);
        left--
        right++
    }
    return currentPali;
}
