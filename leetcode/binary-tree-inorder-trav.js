/**
https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inOrderTraversal = (root) => {
  if(!root){
    return [];
  }
  
  return recusivlyGoDown(root, []);
}

const recusivlyGoDown = (root, arr) => {
  if(!root) return;
  
  recusivlyGoDown(root.left, arr);
  arr.push(root.val);
  recusivlyGoDown(root.right, arr);
  return arr;
}
