https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = [];
    
    const dfs = (node) => {
//         preorder traversal root -> left -> right
        if(node === null){
            res.push('null');
            return
        }
        res.push(node.val.toString())
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
//     create the preorder travrsal string with ',' as the seperator
    return res.join(',')
};

/**1
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // create an assray where we split on the ','
    let vals = data.split(',');
    let i = 0
    const dfs = () => {
        if(vals[i] === 'null'){
            i+=1;
            return null;
        }
        let node = new TreeNode(Number(vals[i]))
        i+=1
//         here we are also doing a dfs in a preorder travesal fashion
        node.left = dfs()
        node.right = dfs()
        return node
    }
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
