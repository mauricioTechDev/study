var postorderTraversal = function(root) {
    if(!root) return [];
    
    return helper(root, []);
};
​
var helper = (node, arr) => {
    if(node === null) return;
    helper(node.left, arr);
    helper(node.right, arr);
    arr.push(node.val);
    return arr

