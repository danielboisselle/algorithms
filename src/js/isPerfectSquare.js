/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let check = num;
  
  while (check > 0) {
      if (check * check === num) {
          return true;
      }
      
      check -= 1;
  }
  
  return !!check;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  return Number.isInteger(num ** .5)
};