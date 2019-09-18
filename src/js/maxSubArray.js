const maxSubArray = nums => {
  let maxTotal = nums[0],
    sum = 0;
  for (let i of nums) {
    sum += i;
    if (maxTotal < sum) {
      maxTotal = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxTotal;
};
