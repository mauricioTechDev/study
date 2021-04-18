// https://www.codewars.com/kata/5981a139f5471fd1b2000071/train/javascript

function task(w, n, c) {
  const dayMap = {
    'Monday': 'James',
    'Tuesday': 'John',
    'Wednesday': 'Robert',
    'Thursday': 'Michael',
    'Friday': 'William',
  };
  const worker = dayMap[w];
  const money = n*c;
  const result = `It is ${w} today, ${worker}, you have to work, you must spray ${n} trees and you need ${money} dollars to buy liquid`;
  
  return result; 
}
