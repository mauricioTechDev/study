// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

function switcher(x){
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('').reverse(),
        map = {
    '27': '!',
    '28': '?',
    '29': ' '
  }
  
  return x.map((el) => {
    const index = +el - 1;
    return map[el] ? map[el] : alphabet[index];
  }).join('');


}
