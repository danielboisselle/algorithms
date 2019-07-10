/**
 * 
 * @param {Number[]} arr 
 * @param {Number} k 
 */

function maxSum(arr, k) {
  let totalSum = 0;

  while (k > 0) {
    const max = Math.max.apply(null, arr);
    totalSum += max;
    arr.splice(arr.indexOf(max), 1);
    k -= 1;
  }

  return totalSum;
}

/**
 * 
 * @param {Number[]} arr 
 * @param {Number} k 
 */

function maxSumRecursive(arr, k) {
  let max;

  if (k === 0) {
    return 0;
  } else {
    max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    k--;
  }

  return max + maxSumRecursive(arr, k);
}