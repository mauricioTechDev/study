https://leetcode.com/problems/symmetric-tree/

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let result = true
    
    function helper(node1, node2){
        if(!node1 && !node2){
            return
        }
        
        if(!node1 || !node2 || node1.val !== node2.val){
            result = false
            return
        }
        
        helper(node1.left, node2.right)
        helper(node1.right, node2.left)
    }
    
    helper(root.left, root.right)
    
    return result
    
};
