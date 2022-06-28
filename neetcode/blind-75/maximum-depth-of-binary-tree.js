https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//////Recusrise Solution
var maxDepth = function(root) {
    // If the root is null return zero
    if(root == null) return 0;
    
//     We do plus 1 becouse there is a least a head node 
    let res = 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    return res
};

/////Breadth first search Solution
var maxDepth = function(root) {
    // If the root is null return zero
    if(root == null) return 0;
    
    let q = [root];
    let level = 0;
    
    while(q.length !== 0){
        let len = q.length;
        while(len !== 0){
            let currentNode = q.shift()
            if(currentNode.left){
                q.push(currentNode.left)
            }
            if(currentNode.right){
                q.push(currentNode.right)
            }
            len-=1
        }
        level+=1
    }
    return level
};
