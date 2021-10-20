// https://www.codewars.com/kata/536c6b8749aa8b3c2600029a/javascript

/*
Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

function sortString(str,order) {
let res = [];
for (let i in order){
    while(str.includes(order[i])){
        res.push(order[i]);
        str = str.replace(order[i],'');
    }
}

return (res.join('') + str);
}
