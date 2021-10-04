// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(strng, arr) {
  if(strng === '') return true;
  
  let length = strng.length - 1;
  let memoryArray = strng.split('');
  let wordSet = new Set();
  let numberOfRotations = 0;
  
  wordSet.add(strng);
  numberOfRotations+=1;
  
  while(length > 0){
    let temp = memoryArray.shift()
    memoryArray.push(temp);
    if(!wordSet.has(memoryArray.join(''))){
      wordSet.add(memoryArray.join(''));
      numberOfRotations+=1;
    }
    length-=1
  }
  
  arr.forEach((word) => {
    if(wordSet.has(word)){
      numberOfRotations-=1;
    }
  })
  
  return numberOfRotations === 0;
}
