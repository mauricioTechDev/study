https://leetcode.com/problems/design-add-and-search-words-data-structure/
class TrieNode{
    constructor(){
        this.children = {},
        this.lastNode = false
    }
}


var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;
    
    for(const letter of word){
        if(!curr.children[letter]){
            curr.children[letter] = new TrieNode()
        }
        curr = curr.children[letter]
    }
    curr.lastNode = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    const dfs = (index, root) => {
        let curr = root;
        
        for(let i = index; i < word.length; i+=1){
            let letter = word[i];
            if(letter === '.'){
//             backtracking recurssion
                for(const childNode of Object.values(curr.children)){
                    let index = i + 1
                    if(dfs(index, childNode)){
                        return true;
                    }
                }
                return false
            } else {
//                 recusive part
                if(!curr.children[letter]){
                    return false
                }
            curr = curr.children[letter]
            }
        }
        return curr.lastNode
    }
    return dfs(0, this.root)
    
};


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
