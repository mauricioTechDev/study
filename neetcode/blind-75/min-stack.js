https://leetcode.com/problems/min-stack/submissions/

var MinStack = function() {
    this.stack = new Array()
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = this.stack.length === 0 ? val : this.stack[this.stack.length - 1].minVal  
    this.stack.push({currentVal: val, minVal: Math.min(min, val)})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length - 1].currentVal
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length - 1].minVal
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
