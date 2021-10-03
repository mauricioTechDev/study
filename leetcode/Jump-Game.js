/*
https://leetcode.com/problems/jump-game/
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
Javascript code
The idea:
If end node is reachable from first, there must be one node before it reachable (any, including first node).
we set current reachable at the end node's index
loop from the node next to last node of the array to the first node.
if we can jump to current reachable from node at i, we update new reachable as i
continue until the first node
finally, if reachable is the first node, the last node is reachable.
*/


const canJump = function(nums) {    
    let trackback = nums.length - 1;    
    
    for(let i=nums.length - 2; i >=0; i--)
        if (nums[i] >=  trackback - i) trackback = i;
    
    return trackback == 0;
};
