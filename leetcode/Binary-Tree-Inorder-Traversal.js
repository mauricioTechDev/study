var inorderTraversal = function(root) {
    if(!root) return []    
    
    let stack = [];
    let result = [];
    
  let cur = root;
  
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }
    
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }
  
  return result;
    
};
