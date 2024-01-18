/** 2 sum Problem with sorted array input
 * Problem: given an array sorted in increasing order, find two numbers such that they add up to a specific target. Return the indices of the two numbers.
 */

function twoSum(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (array[left] + array[right] !== target) {
    if (array[left] + array[right] < target) {
      left++;
      continue;
    }
    if (array[left] + array[right] > target) {
      right--;
    }
  }

  return [left, right];
}

export default twoSum;
