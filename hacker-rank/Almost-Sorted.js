// https://www.hackerrank.com/challenges/almost-sorted/problem

// Complete the almostSorted function below.
function almostSorted(arr) {
    // strore the not sorted
    let p1, p2, v1, v2, res;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            if (!v1) p1 = i;
            if (v1 && !v2) p2 = i;
        }
        if (arr[i - 1] > arr[i]) {
            if (!p2) v1 = i;
            if (p2) v2 = i;
        }
    }
    if (!p1) p1 = 0;

    // reverse
    if (!v2) {
        if (arr[p1 - 1] < arr[v1] && arr[p1] < arr[v1 + 1]) {
            if (v1 - p1 == 1) {
                res = `swap ${p1 + 1} ${v1 + 1}`;
            } else {
                res = `reverse ${p1 + 1} ${v1 + 1}`;
            }
        }
    }

    // swap
    if (v2) {
        if (arr[p1] > arr[p2] && arr[v1] > arr[v2] &&
            arr[p1 - 1] < arr[v2] && arr[p1] < arr[v2 + 1]) {
            res = `swap ${p1 + 1} ${v2 + 1}`;
        }
    }
    //swap_2
    if ((!p2) && (!v2) && v1 - p1 == 1) {
        res = `swap ${p1 + 1} ${v1 + 1}`;
    }

    //console.log('p1: ' + p1 + ' | v1: ' + v1 + ' | p2: ' + p2 + ' | v2: ' + v2);
    if (res) {
        console.log('yes');
        console.log(res);
    } else {
        console.log('no');
    }

}
