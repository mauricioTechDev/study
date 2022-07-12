

var Trie = function() {
    this.key = null;
    this.children = {};
    this.end = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(this.key === null){
        let arr = word.split('');

        const dfs = (ltrs, children) => {
            let ltrsLength = ltrs.length;
            let count = 0
            let letter = ltrs.shift();
            let curr = children
            while(curr[letter]){
                curr = curr[letter].children
                count+=1
                letter = ltrs.shift();
            }
            while(count <= ltrsLength){
                    let subletter = ltrs.shift();
                    count+=1;
                    if(count === ltrsLength){
                        curr[letter] = {
                            key: null,
                            children: {},
                            end: true
                        }
                    } else if (count < ltrsLength) {
                        curr[letter] = {
                            key: subletter,
                            children: {},
                            end: false
                        }
                    }
                    curr = curr[letter]?.children;
                    letter = subletter;
            }

            if(count === ltrsLength) return null
        }
        dfs(arr, this.children)
    } else {
        thi.key = word
    }
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const root = new Trie()
console.log({root})
root.insert('apple')
root.insert('apps')
root.insert('dad')
console.log({root})
