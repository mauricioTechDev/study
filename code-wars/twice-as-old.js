// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = sonYearsOld * 2;
  let yearCount = 0;
  if(dadYearsOld > twice){
    while(dadYearsOld > twice){
      dadYearsOld -= 1
      yearCount += 1
    }
  } else {
    while(dadYearsOld < twice){
      dadYearsOld += 1
      yearCount += 1
    }
  }
  return yearCount;
  
}
