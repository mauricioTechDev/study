//  https://www.hackerrank.com/challenges/save-the-prisoner/problem

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    // int n: the number of prisoners
    // int m: the number of sweets
    // int s: the chair number to begin passing out sweets from
    return (m-1 + s)%n || n;
}

