// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = i
        }
    }
    
    for(let j = 0; j < nums.length; j++){
        let sum = target - nums[j]
        if(map[sum] && map[sum] !== j){
            return [map[sum], j]
        }
    }
    return null;
    
};
