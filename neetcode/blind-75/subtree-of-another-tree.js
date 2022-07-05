https://leetcode.com/problems/subtree-of-another-tree/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(root === null) return false;
    let isMatched = dfs(root, subRoot);
    if(isMatched === true) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

const dfs = (nodeOne, nodeTwo) => {
    if(nodeOne === null && nodeTwo === null){
        return true;
    }
    if(nodeOne === null || nodeTwo === null){
        return false;
    }
    if(nodeOne.val !== nodeTwo.val){
        return false;
    }
    let match = dfs(nodeOne.left, nodeTwo.left) && dfs(nodeOne.right, nodeTwo.right);
    
    return match
}

