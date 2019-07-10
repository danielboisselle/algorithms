/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const closeChar = ['}', ']', ')'];
  const match = {
      '{':'}',
      '[':']',
      '(':')',
  }
  
  let flag = 0;
  let current = s[flag];
  
  while(current) {
      if (closeChar.includes(current)) {
          const last = stack[stack.length - 1];
          if (!last) {
              break;
          }
          // check that last added is closable by current
          else if (match[last] === current) {
              stack.pop();
          } 
          // if not break from the loop
          else {
              break;
          }
      } else {
          stack.push(current)
      }
      
      current = s[flag += 1];
  }
  
  return stack.length === 0 && !current;
};