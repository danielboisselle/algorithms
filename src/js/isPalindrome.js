/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const stringX = `${x}`;
  const stringXLen = stringX.length;
  
  if (stringXLen <= 1) return true;
  
  if (stringX[0] !== stringX[stringXLen - 1]) return false;
  
  return isPalindrome(stringX.slice(1, -1));
};
