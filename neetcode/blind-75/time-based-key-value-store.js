https://leetcode.com/problems/time-based-key-value-store/


var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)){
        this.map.set(key, [])
    }
    let currentArr = this.map.get(key)
    currentArr.push([value, timestamp])
    this.map.set(key, currentArr);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let left = 0;
    if(!this.map.has(key)) return ''
    const arr = this.map.get(key)
    let right = arr.length - 1;
    let ans = ''
    
    while(left <= right){
        let middle = Math.floor((left+right) / 2); 
        
        if(timestamp === arr[middle][1]){
            return arr[middle][0];
        }
        if(timestamp >= arr[middle][1]){
            left = middle + 1;
            ans = arr[middle][0];
        }
        if(timestamp < arr[middle][1]){
            right = middle - 1;
        }
    }
    return ans
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
