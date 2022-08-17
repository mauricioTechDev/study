https://www.hackerrank.com/challenges/separate-the-numbers/problem

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // Write your code here
    const len = s.length;
    let first = 0; // first number of the increasing sequence
    let nDigits = 1; // "91011", 1 = "9", 2 = "91", 3 = "910", ...
    let p = 0; // start index
    let q = 1;  // end index
    let incr = 1; // increment
    let number = 0; // string to BigInt
    let search = 0; // number to search (number + 1)
    let next = 0; // string segment for look up

    while (q < len) {
        number = BigInt(s.slice(p, q));
        search = (number + 1n).toString();
        nDigits = search.length;

        next = s.slice(q, q + nDigits);

        if (search[0] !== '0' && search === next) {
            if (p === 0) first = number;
            p = q;
            q = p + nDigits;
            if (q >= len) {
                console.log('YES ' + first);
                return 1;
            }
        } else {
            p = 0;
            q = (incr++);
        }
    }
    console.log('NO');
}
