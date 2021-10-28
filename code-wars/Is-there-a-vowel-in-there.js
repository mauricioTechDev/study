// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

function isVow(a){
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  
  return a.map((el) => {
    let letter = String.fromCharCode(el);
    
    return set.has(letter) ? letter : el;
  })
}
