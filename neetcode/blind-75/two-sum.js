https://leetcode.com/problems/two-sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map = {};
    
    for(let i = 0; i < nums.length; i +=1){
        if(map[nums[i]] != undefined){
            return [map[nums[i]], i]
        }
        map[target - nums[i]] = i
    }
    console.log(map)
};

