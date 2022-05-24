/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// https://leetcode.com/problems/rotate-array/
const rotate = (nums, k) => {
  const length = nums.length - 1
  k %= nums.length

  reverse(nums, 0, length)
  reverse(nums, 0, k - 1)
  reverse(nums, k, length)

  return nums
}

const reverse = (nums, start, end) => {
  while(start < end){
      let temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
  }
    return nums
}
