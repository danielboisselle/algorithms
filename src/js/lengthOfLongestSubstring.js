/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  
  let longestSubString = null;
  
  for (let outter = 0; outter < s.length; outter += 1) {
      const outterChar = s[outter];
      let subStr = outterChar;
      let subStrSeen = new Set();
      
      subStrSeen.add(outterChar);
      
      for (let inner = outter + 1; inner < s.length; inner += 1) {
          const innerChar = s[inner];
          
          if (subStrSeen.has(innerChar)) {
              inner = s.length; // break the loop
          } else {
              subStrSeen.add(innerChar)
              subStr += innerChar;
          }
      }
      
      if (longestSubString === null) {
          longestSubString = subStr;
      } else if (longestSubString.length < subStr.length) {
          longestSubString = subStr;
      }
  }
  
  return longestSubString.length;
};
