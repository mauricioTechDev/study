https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode{
    constructor(){
        this.children = {},
        this.endOfWord = false
    }
}

var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    
    for(const letter of word){
        if(!curr.children[letter]){
            curr.children[letter] = new TrieNode()
        }
        curr = curr.children[letter]
    }
    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    
    for(const letter of word){
        if(curr.children[letter] === undefined){
            return false
        }
        curr = curr.children[letter]
    }
    return curr.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    
    for(const letter of prefix){
        if(curr.children[letter] === undefined){
            return false
        }
        curr = curr.children[letter]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
