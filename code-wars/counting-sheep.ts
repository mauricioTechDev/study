//. https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {

  let count = 0;
  for(const el of arrayOfSheep){
    if(el) count+=1
  }
  return count
}
