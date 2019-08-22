/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = 1,
    result = 1;
  if (x === 0 || x === 1)
    return x;
  while (result < x) {
    i++;
    result = i * i;
  }
  if (result > x)
    return i - 1;
  return i;
};
