// https://leetcode.com/submissions/detail/465365864/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxNum = 0
    let currentCount = 0
    
    let memo = []
    let tempSearch = ''
    let dict = {};
    
    for(let i = 0; i < s.length; i++){
        if(dict[s[i]]){
            if(currentCount >= maxNum){
                maxNum = currentCount;
            }
            while(dict[s[i]]){
                tempSearch = memo.shift() 
                  delete dict[tempSearch]
                currentCount--
            }

        } 
            dict[s[i]] = s[i]
            memo.push(s[i])
            currentCount++
        
    }
    
    return maxNum >= currentCount ? maxNum : currentCount;
};
