// https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

function wordToBin(str){
  return str.split('').map((letter) => letter.charCodeAt().toString(2).padStart(8,'0'));
}
