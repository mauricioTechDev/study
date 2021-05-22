//https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript

function lastSurvivor(letters, coords) {
 const lettersArr = letters.split('');
  
  coords.forEach((el) => {
    lettersArr.splice(el, 1)
  })
  
  return lettersArr.join('')
}
