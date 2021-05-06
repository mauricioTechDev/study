// https://www.codewars.com/kata/52f3bb2095d6bfeac2002196/train/javascript

var validWord = function(dictionary, word) {
  if(word.length < 1) return true;
  
  let flag = false;
  
  dictionary.forEach(dicWord => {
    if(!word.startsWith(dicWord) || flag) return;
    else flag = validWord(dictionary, word.replace(dicWord, ""));
  })
  
  return flag;
};
