// https://www.codewars.com/kata/5f05e334a0a6950011e72a3a/train/javascript

const indexOf = (words, target) => {
  let currPos = Math.ceil(words.length/2) - 1,
      currInc = currPos;  
  while (currInc > 0) {
    if (target.length <= words[currPos].length && currPos !== 0) {
      currPos = currPos - currInc;
      currInc = Math.floor(currInc/2);
    } else {
      currInc = Math.floor(currInc/2);
      currPos = currPos + currInc;
    }
  }
  return words.indexOf(target, currPos);
}
