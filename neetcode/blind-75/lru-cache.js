https://leetcode.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
class Node{
    constructor(key, val){
        this.key = key,
        this.val = val,
        this.next = null,
        this.prev = null
    };
};


var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); //map keys no node
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
//    get the oldest and newest in cache
    this.left.next = this.right;
    this.right.prev = this.left;
};

LRUCache.prototype.remove = function(node) {
    prev = node.prev;
    nxt = node.next;
    prev.next = nxt;
    nxt.prev = prev;
}
// insert at the right most part of the linked list.  Becosue this is the newset node. 
LRUCache.prototype.insert = function(node) {
    prev = this.right.prev;
    nxt = this.right;
    prev.next = nxt.prev = node;
    node.next = nxt;
    node.prev = prev;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        this.remove(this.cache.get(key));
        this.insert(this.cache.get(key));
        return this.cache.get(key).val;
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.remove(this.cache.get(key));
    }
    this.cache.set(key, new Node(key, value));
    this.insert(this.cache.get(key))
    
    if(this.cache.size > this.capacity){
//         remove and evict the least recently use key from the list and cache
        lru = this.left.next
        this.remove(lru)
        this.cache.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
