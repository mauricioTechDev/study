https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    // Write your code here
    let amOrPm = s[s.length - 2] + s[s.length - 1]
    let pmMap = {
        '01': '13',
        '02': '14',
        '03': '15',
        '04': '16',
        '05': '17',
        '06': '18',
        '07': '19',
        '08': '20',
        '09': '21',
        '10': '22',
        '11': '23',
        '12': '12'
    }
    
    if(amOrPm === 'AM'){
        if(`${s[0]}${s[1]}` === '12'){
            return `00:${s[3]}${s[4]}:${s[6]}${s[7]}`
        } else {
            return s.slice(0,8);
        }
    } else if (amOrPm === 'PM'){
        return `${pmMap[s[0]+s[1]]}:${s[3]}${s[4]}:${s[6]}${s[7]}`;
    }
}
