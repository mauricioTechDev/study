https://leetcode.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */
var invertTree = function(root) {    
    if(root == null){
        return root
    }
    let leftNode = root.left
    let rightNode = root.right
    root.left = rightNode;
    root.right = leftNode;
    
    invertTree(leftNode);
    invertTree(rightNode);
    
    return root
};
