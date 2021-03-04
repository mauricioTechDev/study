// var productExceptSelf = function(nums) {

var productExceptSelf = function(nums) {
    let len = nums.length;
    let leftProd =[1];
    let rightProd =[1];
    let tempNum = 0
    let ans = [];
    
    let firstNum = 1;
    let lastNum = 1;
        
    for(let i = 0; i < len-1; i++){
        leftProd.push(firstNum);  
        firstNum = nums[i] * firstNum;
                 
    }
    for(let j = len-1; j > 0; j--){
        lastNum = nums[j] * lastNum;
        rightProd.unshift(lastNum)
    }
    
    for(let d = 0; d < len; d++){
        tempNum = leftProd[d] * rightProd[d];
        ans.push(tempNum);
    }
    
    return ans
    
};
