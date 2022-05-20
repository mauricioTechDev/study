var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search 
        let left = 1, right = n;
        
        while(left < right) {
            // prevent overflow 
            let mid = Math.floor(left + (right - left)/2);
            
            if(isBadVersion(mid) === true) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};
