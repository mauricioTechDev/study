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
var maxDepth = function(root) {
    // If the root is null return zero
    if(root == null) return 0;
    
//     We do plus 1 becouse there is a least a head node 
    let res = 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    return res
};
