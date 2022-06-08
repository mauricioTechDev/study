//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Set()
   let longestSubstring = 0
   
   let backRunner = 0;
    let forwardRunner = 0
    
    while(backRunner < s.length && forwardRunner < s.length){
        if( !map.has(s[forwardRunner]) ){
            map.add(s[forwardRunner])
            longestSubstring = Math.max(longestSubstring, forwardRunner - backRunner + 1)
            forwardRunner++
        } else {
            map.delete(s[backRunner])
            backRunner++
        }
    }
    return longestSubstring
};
