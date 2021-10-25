/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 
Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let curentLength = 0;
    
    let dict = {};
    let tempSearchLetter = '';
    let memoizationSet = new Set();
    let iterator = memoizationSet.values();
    
    let arr = s.split('');
    
    arr.forEach((el) => {
        if(dict[el]){
            if(maxLength <= curentLength){
                maxLength = curentLength
            }
            iterator = memoizationSet.values();
            while(dict[el]){
                tempSearchLetter = iterator.next().value;
                delete dict[tempSearchLetter]
                memoizationSet.delete(tempSearchLetter)
                curentLength--
            }
        }
        dict[el] = el;
        memoizationSet.add(el);
        curentLength++;
    })
    
    return maxLength >= curentLength ? maxLength : curentLength;
};

