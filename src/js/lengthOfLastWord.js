/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let words = s.split(' ');
  let string = words.pop();
  
  while (string === "") {
      string = words.pop();
  }
  
  if (string === undefined) {
      return 0;
  }

  return string.length;
};
