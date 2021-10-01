// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript
The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
  let sortNums = nums.sort((a, b) => a - b);
  
  for(let i = 0; i < sortNums.length - 1; i++){
    if(sortNums[i]+1 !== sortNums[i+1]){
      return sortNums[i]+1
    } 
  }
  
  if(sortNums[0] !== 0){
    return 0
  }
  
  if(sortNums[sortNums.length - 1] !== 100){
    return 100
  }
}
