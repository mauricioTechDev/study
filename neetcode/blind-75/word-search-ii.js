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
    constructor(node){
        this.root = node
    }
    
    addWord(word){
        let curr = this.root;
        
        for(const letter of word){
            if(!curr.children[letter]){
                curr.children[letter] = new TrieNode()
            }
            curr = curr.children[letter];
        }
        curr.lastNode = true
    }
}


var findWords = function(board, words) {
    let trie = new Trie(new TrieNode());
    
    for(const word of words){
        trie.addWord(word);
    }
    
    let row = board.length;
    let col = board[0].length;
    let ans = new Set();
    let visitedIndexes = new Set();
    
    const dfs = (r, c, node, word) => {
        if(
            r < 0 || c < 0 ||
            r >= row || c >= col ||
            visitedIndexes.has(`${r},${c}`) ||
            !node.children[board[r][c]]
        ){
            return;
        }
        
        visitedIndexes.add(`${r},${c}`);
        word += board[r][c];
        node = node.children[board[r][c]];
        if(node.lastNode){
            ans.add(word)
        }
        
        dfs(r, c + 1, node, word)
        dfs(r, c - 1,node, word)
        dfs(r +1,c , node, word)
        dfs(r-1,c, node, word)
        visitedIndexes.delete(`${r},${c}`);
    }
    
    for(let r = 0; r < row; r+=1){
        for(let c = 0; c < col; c+=1){
            dfs(r, c, trie.root, '')
        }
    }
    return [...ans]
};
