https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(bar, day, month) {
  let ways = 0
  let a = 0
  let b = month - 1
  
  let sum = bar.slice(0 , month).reduce((x, y) => x + y, 0)
  
  while (b <= bar.length) {
    if (sum == day) ways++
    sum -= bar[a]
    a++
    b++
    sum += bar[b]
  }
  
  return ways
}
