https://www.hackerrank.com/contests/hourrank-24/challenges/strong-password/problem

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    if(n == 3) return 3
    if(n == 2) return 4
    if(n == 1) return 5
    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"
    let numObj = {}
    let lowerObj = {}
    let upperObj = {}
    let specialObj = {}
    const data = [{numbers}, {lower_case}, {upper_case}, {special_characters}];
    
    for(const el of data){
        if(el['numbers'] !== undefined){
            for(const num of el['numbers']){
                numObj[num] = num;
            }
        }
        if(el['lower_case'] !== undefined){
            for(const lower of el['lower_case']){
                lowerObj[lower] = lower;
            }
        }
        if(el['upper_case'] !== undefined){
            for(const upper of el['upper_case']){
                upperObj[upper] = upper;
            }
        }
        if(el['special_characters'] !== undefined){
            for(const special of el['special_characters']){
                specialObj[special] = special;
            }
        }
    }
    let mem = {}
    let charachersAdded = 0
    
    for(const letter of password){
        if(numObj[letter] && mem['numObj'] == undefined){
            mem['numObj'] = letter;
            charachersAdded+=1;
        }
        if(lowerObj[letter] && mem['lowerObj'] == undefined){
            mem['lowerObj'] = letter;
            charachersAdded+=1;
        }
        if(upperObj[letter] && mem['upperObj'] == undefined){
            mem['upperObj'] = letter;
            charachersAdded+=1;
        }
        if(specialObj[letter] && mem['specialObj'] == undefined){
            mem['specialObj'] = letter;
            charachersAdded+=1;
        }
        if(charachersAdded === 4 && password.length >= 6) return 0
    }
    // console.log({mem, charachersAdded, password, numObj, lowerObj, upperObj, specialObj})
    if(password.length === 5){
        return 4 - charachersAdded + 1
    } else if (password.length === 4) {
        return 4 - charachersAdded + 2
    } else {
        return 4 - charachersAdded;   
    }
}
