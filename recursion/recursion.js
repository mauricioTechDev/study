function reverseString(string){
    if(string.length === 0){
        return ''
    }

    return reverseString(string.substring(1)) + string[0]
}
// console.log(reverseString('John'))

function ifPalindrome(word){
    if(word === '' || word.length === 1){
        return true
    }

    if(word[0] === word[word.length - 1]){
        return ifPalindrome(word.substring(1, word.length - 1))
    }

    return false;
}

// console.log(ifPalindrome('1dt2102td1'))




function runifPalindromeTest(truePalidrom, falsePalidrome){
    let tuePali = ifPalindrome('racecar');
    if(tuePali === true){
        console.log(`PASS: The word racecar is a palindrom`)
    } else {
        console.log(`ERROR: racecar is a palindrom`)
    }

    let falsePali = ifPalindrome('chicken');
    if(falsePali === false){
        console.log(`PASS: The word chicken is NOT palindrom`)
    } else {
        console.log(`ERROR: chicken is NOT palindrom `)
    }
}

console.log(runifPalindromeTest('racecar', ''))
