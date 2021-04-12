// https://www.codewars.com/kata/57ee31c5e77282c24d000024

function paul(x){
  const map = {
    'kata': 5,
    'Petes kata': 10,
    'life': 0,
    'eating': 1,
    'sum': 0
  }
  
  for(const word of x){
    map.sum += map[word];
  }
  
  const emotionalStatus = map.sum

  return emotionalStatus < 40 ? 'Super happy!'
    : emotionalStatus < 70 ? 'Happy!'
    : emotionalStatus < 100 ? 'Sad!'
    : 'Miserable!'
}

