// https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(s, t, k) {
    let count = 0;
    let toPopOff = 0
    let spotsRemains = 0
    let sArray = s.split('')
    let tArray = t.split('')
    let sLength = sArray.length;
    let tLength = tArray.length;
    if(s === t) return 'Yes';
    
    for(let i = 0; i < sLength; i++){
        if(sArray[i] !== tArray[i]){
            toPopOff = sLength - i;
            while(toPopOff > 0){
                sArray.pop();
                count++
                toPopOff--
            }
            sLength = sArray.length;
            spotsRemains = tLength - sLength;
            count += spotsRemains;
            return count <= k ? 'Yes' : 'No';
        }
        if(i+1 === sLength){
            spotsRemains = tLength - sLength;
            count += spotsRemains;
            if(count === k){
                return 'Yes';
            } else if (k%count === 0 && k !== 2){
                return 'Yes';
            } else {
                return 'No';
            }
        }   
    }
}
