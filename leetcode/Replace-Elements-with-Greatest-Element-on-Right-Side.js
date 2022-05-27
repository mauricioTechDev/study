https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let lengthOfArr = arr.length - 1;
    let currentMax = -1
    
    while(lengthOfArr >= 0){
        const temp = arr[lengthOfArr]
        arr[lengthOfArr] = currentMax
        if(temp >= currentMax){
            currentMax = temp
        }
        lengthOfArr-=1
    }
    return arr
        
};
