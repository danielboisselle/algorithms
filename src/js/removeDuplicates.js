/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const uniqueNums = {}
  
  for (let index = 0; index < nums.length; index += 1) {
    const num = nums[index];

      if (uniqueNums.hasOwnProperty(num)) {
          nums.splice(index, 1);
          index -= 1
      } else {
        uniqueNums[num] = true;
      }
  }
  
  return nums.length;
};