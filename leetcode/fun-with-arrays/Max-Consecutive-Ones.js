// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
let count = 0
let maxLength = 0

for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1){
        count++
    }
    
    if(nums[i] !== 1){
        if(count >= maxLength){
            maxLength = count
        }
        count = 0
    }
}
    return maxLength > count ? maxLength : count



    
};
