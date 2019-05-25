/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
  let fast = 1;
  let slow = 0;
  
  let res = null;
  
  let lastIndex = nums.length  - 1;
  
  while (slow < lastIndex && !res) {
      if (nums[slow] + nums[fast] === target) {
          res = [slow, fast];
      }
      
      if (fast === lastIndex) {
          slow += 1;
          fast = slow + 1;
      } else {
          fast += 1;
      }
  }
  
  return res || [];
};