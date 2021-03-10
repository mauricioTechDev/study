// https://leetcode.com/submissions/detail/465779999/?from=explore&item_id=776

var threeSum = function(nums) {
    let solution = [];
    let left = 0;
    let right = nums.length-1;
    
    if(nums.length < 3) return solution;
    nums.sort((a,b) => a - b); // [-4, -1, -1, 0, 1, 2]
    
    for(let [index, number] of nums.entries()){
        if(number > 0) return solution;
        if(number === nums[index-1]) continue;
        //number -4 
        left = index+1; // -1  
        right = nums.length-1;// 2
        let temp = 0; 
        
        while (left < right){
            temp = number + nums[left] + nums[right];
            
            if(temp === 0){
                solution.push([number, nums[left], nums[right]])
                left++;
                right--; 
                
                while (left < right && nums[left] == nums[left-1]){
                    left++;
                }
                
                while (left < right && nums[right] == nums[right+1]){
                    right--;
                }
            } else if (temp > 0){
                right--
            } else if (temp < 0){
                left++
            }           
        }
    }
    return solution
 
    
};
