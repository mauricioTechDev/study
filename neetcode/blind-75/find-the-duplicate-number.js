https://leetcode.com/problems/find-the-duplicate-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
//Floyd's Tortoise and Hare Algorithm
// think of this as a linked list problem.  Where the num in the array is pointing to the correspoing node that can be found by getting the value
// from the index of the node that you are on.  That would be the folloeing node.  In this was if you think about it.  You can vidualize
// when there is a cycle. 
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
//     first loop finds th interesection between the fats and slow pointers
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow == fast){
            break;
        }
    }
//     second loop determines the point at which the slow pointer from the start of the list overlaps with the pointer 
// that comes form the intersectiuon of the slow and fast pointers
    let slowTwo = 0
    while(true){
        slow = nums[slow]
        slowTwo = nums[slowTwo]
        if(slow == slowTwo){
            return slowTwo
        }
    }
    
};

// using set
var findDuplicate = function(nums) {
    
    let set = new Set()
    
    for(const el of nums){
        if(set.has(el)){
            return el
        } else {
            set.add(el)
        }
    }
    
};
