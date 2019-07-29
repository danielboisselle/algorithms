/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(s) {
  let first = 0;
  let second = 1;
  
  while (s[second]) {
      if (s[first] === s[second]) {
          s = s.slice(0, first) + s.slice(second + 1);
          first = 0;
          second = 1;
      } else {
          first += 1;
          second += 1;
      }
  }
  
  return s
};

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(s) {
    let pointer = 0
    
    while (s[pointer]) {
        if (s[pointer] === s[pointer + 1]) {
            s = s.slice(0, pointer) + s.slice(pointer + 2);
            pointer = 0;
        } else {
            pointer++;
        }
    }
    
    return s
};