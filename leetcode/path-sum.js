https://leetcode.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return dfs(root, 0, targetSum)
};


const dfs = (node, currSum, target) => {
    if(node === null) return false
//    we add the vall as we recusevly go down the tree 
    currSum+= node.val
    if(!node.left && !node.right){
//       return true he if at any point our sum is equal to the target
        return currSum === target
    }
//     we return true if we find the total either on the lef tor right side
    return dfs(node.left, currSum, target) || dfs(node.right, currSum, target);
}
