// https://www.hackerrank.com/challenges/circular-array-rotation/problem

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    while(k > 0) {
        a.unshift(a.pop());
        k--
    }

    return queries.map(value => {
        return a[value];
    })

}
