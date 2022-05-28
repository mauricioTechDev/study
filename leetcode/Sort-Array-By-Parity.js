// https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = []
    let odd = []
    
    for(let i = 0; i < nums.length; i+=1){
        if(nums[i]%2 === 0){
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }
    return even.concat(odd)
};
