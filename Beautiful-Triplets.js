// https://www.hackerrank.com/challenges/beautiful-triplets/problem

function beautifulTriplets(d, arr) {
let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + (d * 2))) {
            result++
        }
    }
    return result;
}
