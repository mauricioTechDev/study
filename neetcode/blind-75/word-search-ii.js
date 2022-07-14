https://leetcode.com/problems/word-search-ii/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 class TrieNode{
    constructor(){
        this.children = {},
        this.lastNode = false
    }
}

class Trie{
    constructor(root){
        this.root = root
    }
    
    addWord(word){
        let curr = this.root
        curr.refs += 1
        for(const letter of word){
            if(!curr.children[letter]){
                curr.children[letter] = new TrieNode()
            }
            curr = curr.children[letter]
        }
        curr.lastNode = true
    }
}

var findWords = function(board, words) {
    let trie = new Trie(new TrieNode);
    
    for(const word of words){
        trie.addWord(word);
    }
    
    let rows = board.length;
    let col = board[0].length;
    let res = new Set();
    let visit = new Set();
    
    const dfs = (r, c, node, word) => {
        if(
            r < 0 || c < 0 ||
            r >= rows || c >= col ||
            !node.children[board[r][c]] ||
            visit.has(`${r},${c}`)
        ){
            return;
        }
        
        visit.add(`${r},${c}`);
        node = node.children[board[r][c]]
        word += board[r][c]
        if(node.lastNode){
            res.add(word);
        }
        
        dfs(r, c + 1, node, word) 
        dfs(r, c - 1, node, word) 
        dfs(r + 1, c, node, word) 
        dfs(r - 1, c, node, word)         
        visit.delete(`${r},${c}`);
    }
    
    for(let i = 0; i < rows; i+=1){
        for(let j = 0; j < col; j+=1){
            dfs(i, j, trie.root, '')
        }
    }
    
    return [...res]
};
