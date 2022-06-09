// https://leetcode.com/problems/longest-repeating-character-replacement/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let right = 0;
    let map = new Map()
    let answer = 0
    
    
    while(right <s.length){
//         create the map with the values
        if(map.has(s[right])){
            map.set(s[right], map.get(s[right])+1)
        } else {
            map.set(s[right], 1)
        }
//         determine if the if the current subarray minus the 
// letter that appears the most times is less than or equal to k if so than check if that
// diffrence is larger than the anser if so then replace
        let maxVal = Math.max(...map.values())
        let windowSize = right - left + 1;
        let lettersToSwap = windowSize - maxVal
        
        if((lettersToSwap) <= k){
            answer = Math.max(answer, windowSize)
        }

//         determine if the if the current subarray minus the 
// letter that appears the most times is greater than k
//         if so than we want to decrease the left index value from the map
// then incremetnt the left pointer
        while(windowSize - maxVal > k){
            map.set(s[left], map.get(s[left]) - 1)
            left++
            windowSize = right - left + 1;
            maxVal = Math.max(...map.values())
        }
//         then increment the right pointer
        right++
        
    }
    
    return answer;
};
