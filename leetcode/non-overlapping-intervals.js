https://leetcode.com/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0] || a[1] - b[1]
    })
    
    let res = 0;
    let prevEnd = intervals[0][1];
    
    let startTimeIndex = 0;
    let endTimeIndex = 1;
    
    for(let i = 1; i < intervals.length; i+=1){
        if(intervals[i][startTimeIndex] >= prevEnd){
            prevEnd = intervals[i][endTimeIndex]
        } else {
// Increment by one becouse we now we would have to delete one
// but we dont atualy need to delete it
            res += 1
            prevEnd = Math.min(intervals[i][endTimeIndex], prevEnd)
        }
    }
    
    return res
};
