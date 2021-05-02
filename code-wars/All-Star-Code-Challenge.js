// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

function createSentence(hours, mins){
  return `${hours} hour(s) and ${mins} minute(s)`;
}
​
function convertToMin(secs){
  return Math.trunc(secs/60);
}
​
function convertToHours(allTheMins){
  return Math.trunc(allTheMins/60);
}
​
function toTime(seconds) {
  const allMins = convertToMin(seconds);
  const hours = convertToHours(allMins)
  const mins = allMins - (hours*60)
  
  return createSentence(hours, mins);
}
