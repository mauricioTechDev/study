https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // a couple corner case handling
	let l1 = haystack.length; 
    let l2 = needle.length;
        if (l1 < l2) {
            return -1;
        } else if (l2 == 0) {
            return 0;
        } else if(haystack === needle){
            return 0
        }
	
        let threshold = l1 - l2;
        for (let i = 0; i <= threshold; i++) {
	    // use substring comparison instead of character comparison
            if (haystack.substring(i,i+l2) == needle) {
                return i;
            }
        }
        return -1;
    
};
