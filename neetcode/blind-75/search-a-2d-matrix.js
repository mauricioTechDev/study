https://leetcode.com/problems/search-a-2d-matrix/submissions/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let leftPointer = 0;
    let endPointer = matrix.length - 1;
    let innerLeftPointer = 0;
    let innerEndPointer = matrix[0].length - 1;
    
    while(leftPointer <= endPointer){
        let middlePointer = Math.floor((leftPointer + endPointer) / 2);
        if(target > matrix[middlePointer][innerLeftPointer] && target < matrix[middlePointer][innerEndPointer]){
            while(innerLeftPointer <= innerEndPointer){
                let innerMiddlePointer = Math.floor((innerLeftPointer + innerEndPointer) / 2);
                
                if(target > matrix[middlePointer][innerMiddlePointer]){
                    innerLeftPointer = innerMiddlePointer + 1;
                } else if(target < matrix[middlePointer][innerMiddlePointer]){
                    innerEndPointer = innerMiddlePointer - 1;
                } else if(target === matrix[middlePointer][innerMiddlePointer]){
                    return true
                }
            }
            
        } else if (target < matrix[middlePointer][innerLeftPointer]){
            endPointer = middlePointer - 1;
        } else if (target > matrix[middlePointer][innerEndPointer]){
            leftPointer = middlePointer + 1;
        } else if (target === matrix[middlePointer][innerLeftPointer]){
            return true
        } else if (target === matrix[middlePointer][innerEndPointer]){
            return true
        }   
    }
    return false;
};
