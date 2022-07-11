
class TreeNode {
    constructor(val){
        this.val = val,
        this.left = null,
        this.right = null
    }
}

class CreateBinarySearchTree {
    constructor(node){
        this.root = node
    }

    addNode(node){
        let curr = this.root;
        const rootCreated = this.#createRoot(node);

        if(!rootCreated){
            if(node.val > this.root.val){


            } else if (node.val < this.root.val){

            } else {
                return `The val of ${node.val} is not a valid value`
            }
        }

    }

    #dfs(root, node, leftOrRight){
        if(leftOrRight === 'right'){
            if(!root.right){
                root.right = node
            }
        } else if (leftOrRight === 'left'){
            if(!root.left){
                root.left = node;
            }
        }

    }

    #createRoot(node){
        if(!this.root){
            this.root = node
            return true
        } else {
            return false
        }
    }


    inOrderTraversal(root){
        if(root === null) return null
        this.inOrderTraversal(root.left);
        console.log({node: root});
        this.inOrderTraversal(root.right);
    }

    preOrderTraversal(node){
        if(node === null) return null;
        console.log(node)
        this.preOrderTraversal(node.left)
        this.preOrderTraversal(node.right)

    }

    postOrderTraversal(node){

    }
}

let one = new TreeNode(10)
console.log({one})
let two = new TreeNode(11)

let newTree = new CreateBinarySearchTree(one);
// console.log({newTree})
let res = newTree.addNode(two)
// console.log({res})

let node = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            right: null,
            left: null
        },
        right: {
            val: 5,
            right: null,
            left: null
        },
    },
    right: {
        val: 7,
        left: {
            val: 8,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 111,
                left: null,
                right: null
            }
        },
        right: {
            val: 10,
            right: null,
            left: null
        },
    }
}
newTree.root = node
console.log(newTree.inOrderTraversal(newTree.root))
console.log({thisIsThewRoot: newTree.root})
