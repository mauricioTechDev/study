/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if(nums.length === 1) return 1 
    
    let map = {}, degree = 0, minLen = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
//         create map with original index and repatitions of num
        if (map[n] !== undefined) {
            map[n][0]++;
        } else {
            map[n] = [1, i];
        }
        
        if (map[n][0] > degree) {
            degree = map[n][0];
            minLen = i - map[n][1] + 1;
        } else if (map[n][0] === degree) {
            minLen = Math.min(minLen, i - map[n][1] + 1);
        }
    }
    
    return minLen;
};  
