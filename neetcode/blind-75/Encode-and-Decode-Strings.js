
class Solution{
    #DELIMITER

    constructor(){
        this.#DELIMITER = '$'
    }

     encoded(strArr) {
        let encodedString = ''

        for(const word of strArr){
            let string = word.toString();
            let wordLength = string.length;
            encodedString += `${wordLength}${this.#DELIMITER}${word}`;
        }

        return encodedString;
    }

    decode(str) {
        let decodedString = []

        for(let i = 0; i < str.length; i+=1){
            let lengthOfWord = Number(str[i]);

                let start = i + 2
                let end = start + lengthOfWord
                let word = str.slice(start, end)
                decodedString.push(word);
                i += lengthOfWord + 1;
        }

        return decodedString
    }
}

const arr = ['dad', 5,'johny', 'mauricio', '$', 'Jacinta', 5,6,7,'$',',','{}', '......','   ', '$','dan', 'laura']

let encodederDecoder = new Solution()
let encodedString = encodederDecoder.encoded(arr)

let decodedString = encodederDecoder.decode(encodedString);

console.log({encodedString})
console.log({decodedString})
