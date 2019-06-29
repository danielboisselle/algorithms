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


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let charFound = false;
  
  for (let index = s.length - 1; index >= 0; index -= 1) {
      const currentCharacter = s[index];
      
      // current character is not an empty space
      // and a character has been indexed
      if (currentCharacter !== ' ' && charFound) {
          count += 1;
      } 
      // current character is not an empty space 
      // and it's out first encounter with one
      if (currentCharacter !== ' ' && !charFound) {
          charFound = true;
          count += 1;
      }
      // current character is an empty space
      // and a character has been indexed
      else if (currentCharacter === ' ' && charFound) {
          index = -1;
      }
  }
  
  return count;
};
