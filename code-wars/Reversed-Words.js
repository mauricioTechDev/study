// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

function reverseWords(str){
  let ans = []
  
  str.split(' ').forEach((el) => {
    ans.unshift(el)
  })
  
  return ans.join(' ');
}
