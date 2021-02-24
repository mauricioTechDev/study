//. https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
     let jumlahWrapper = Math.floor(n / c);
    let eaten = jumlahWrapper;

    while ((jumlahWrapper / m) >= 1) {
        let wrapp = Math.floor(jumlahWrapper / m);
        eaten += wrapp;
        jumlahWrapper = wrapp + (jumlahWrapper % m);
    }

    return eaten;

}
