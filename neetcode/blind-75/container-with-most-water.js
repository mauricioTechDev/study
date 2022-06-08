// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const len = height.length
    if(len === 2){
        return height[0] >= height[1] ? height[1] : height[0]
    }
    
    let left = 0
    let right = len - 1
    
    let max = 0
    
    while(left < right){
        let temp = height[left] > height[right] ? height[right] * (right - left) : height[left] * (right - left)
        if(temp >= max){
            max = temp
        }
        if(height[left] < height[right]){
            left+=1
        } else {
            right-=1
        }
    }
    
    return max
    
};
