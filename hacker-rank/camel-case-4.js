https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem


function processData(input) {
    //Enter your code here
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let upperdictionary = {};
    let lowerdictionary = {};
    for(const letter of letters){
        let lowerCase = letter
        let upperCase = letter.toUpperCase();
        upperdictionary[upperCase] = lowerCase;
    }
    for(const letter of letters){
        let lowerCase = letter
        let upperCase = letter.toUpperCase();
        lowerdictionary[lowerCase] = upperCase;
    }
    // console.log({lowerdictionary, upperdictionary})
    // console.log({input})
       let newInput = input.split("\r\n");
    //    console.log({newInput})
       
       for(const el of newInput){
        if(el[2] === 'M'){
            let transformedWord = methodWord(el, upperdictionary, lowerdictionary);
            console.log(transformedWord)
        }
        if(el[2] === 'C'){
            let transformedWord = classWord(el, upperdictionary, lowerdictionary);
            console.log(transformedWord)
        }
        if(el[2] === 'V'){
            let transformedWord = variableWord(el, upperdictionary, lowerdictionary);
            console.log(transformedWord)
        }  
       }
    
} 

function methodWord(string, upDict, loDict){
    let newString = '';
    if(string[0] === 'S'){
        for(let i = 4; i < string.length - 2; i+=1){
            if(loDict[string[i]]){
                newString+=string[i]
            }
            if(upDict[string[i]]){
                newString+=` ${upDict[string[i]]}`;
            }
        }
    } else if (string[0] === 'C'){
        for(let i = 4; i < string.length; i+=1){
            if(string[i-1] === ' '){
                newString+=string[i].toUpperCase()
            } else if (string[i] !== ' ') {
                newString+=string[i]
            }
        }
        newString+='()'
    }
    return newString;
}

function classWord(string, upDict, loDict){
    let newString = ''
    if(string[0] === 'S'){
        for(let i = 4; i < string.length; i+=1){
            if(upDict[string[i]]){
                if(i === 4){
                    newString+=upDict[string[i]]    
                } else {
                    newString+=` ${upDict[string[i]]}`;
                }
                
            } else {
                newString+=string[i]
            }
        }
    } else if (string[0] === 'C'){
        for(let i = 4; i < string.length; i+=1){
            if(i === 4){
                newString+=loDict[string[i]];
            } else if (string[i-1] === ' '){
                newString+=loDict[string[i]];
            } else if (string[i] !== ' '){
                newString+=string[i]
            }
        }
    }
    return newString
}

function variableWord(string, upDict, loDict){
    let newString = '';
    if(string[0] === 'S'){
        for(let i = 4; i < string.length; i+=1){
            if(upDict[string[i]]){
                newString+=` ${upDict[string[i]]}`;
            } else {
                newString+=string[i]
            }
        }
    } else if (string[0] === 'C'){
        for(let i = 4; i < string.length; i+=1){
            if(string[i-1] === ' '){
                newString+=string[i].toUpperCase()
            } else if (string[i] !== ' ') {
                newString+=string[i]
            }
        }
    }
    return newString;
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
